import { Probot } from "probot";

export = (app: Probot) => {
  // on issue comment
  app.on("issue_comment.created", async (context) => {
    // if comment body is "!assign" or "!assign-me" or "!assign me"
    const body = context.payload.comment.body;
    if (body.match(/!assign(-me)?/i)) {
      // if issue contains label
      // "good first issue" or "good-first-issue" or
      // "good first issues" or "good-first-issues"
      const labels = context.payload.issue.labels;
      if (
        labels.some((label) =>
          label.name.match(/good[- ]?first[- ]?issue(s)?/i)
        )
      ) {
        // if issue is not assigned to anyone
        if (!context.payload.issue.assignee) {
          // assign issue to the comment author
          const assignee = context.payload.comment.user.login;
          const assign = context.issue({ assignees: [assignee] });
          await context.octokit.issues.addAssignees(assign);
        }
        // if issue is assigned to the comment author
        else if (
          context.payload.issue.assignee.login ===
          context.payload.comment.user.login
        ) {
          // create a comment to inform the comment author
          const issueComment = context.issue({
            body: `Hey @${context.payload.comment.user.login}, you are already assigned to this issue!`,
          });
          await context.octokit.issues.createComment(issueComment);
        }
        // if issue is assigned to someone else
        else {
          // create a comment to inform the comment author
          const issueComment = context.issue({
            body: `Hey @${context.payload.comment.user.login}, this issue is already assigned to @${context.payload.issue.assignee.login}!`,
          });
          await context.octokit.issues.createComment(issueComment);
        }
      }
    }
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
