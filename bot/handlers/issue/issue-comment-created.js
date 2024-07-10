// export handler
module.exports = handler;

async function handler(app, context) {
  // if issue contains label
  // "good first issue" or "good-first-issue" or
  // "good first issues" or "good-first-issues" or
  // "test assign me bot" or "test-assign-me-bot"
  const labels = context.payload.issue.labels;
  if (
    labels.find((label) =>
      label.name.match(
        /good[- ]?first[- ]?issue(s)?|test[- ]?assign[- ]?me[- ]?bot/i,
      ),
    )
  ) {
    // If comment is "!assign" or "!assign me" or "!assign-me"
    const comment = context.payload.comment.body.trim();
    if (
      comment === "!assign" ||
      comment === "!assign me" ||
      comment === "!assign-me"
    ) {
      // if issue is not assigned to anyone
      // assign issue to the comment author
      if (!context.payload.issue.assignee) {
        const assignee = context.payload.comment.user.login;
        const assign = context.issue({ assignees: [assignee] });
        await context.octokit.issues.addAssignees(assign);

        // Add heart reaction to the comment
        const reaction = context.issue({ content: "heart" });
        await context.octokit.reactions.createForIssueComment(reaction);
      }
      // if issue is assigned to the comment author
      // create a comment to inform the comment author
      else if (
        context.payload.issue.assignee.login ===
        context.payload.comment.user.login
      ) {
        const issueComment = context.issue({
          body: `Hey @${context.payload.comment.user.login}, you are already assigned to this issue! cc/ @codinasion/codinasion`,
        });
        await context.octokit.issues.createComment(issueComment);
      }
      // if issue is assigned to someone else
      // create a comment to inform the comment author
      else {
        const issueComment = context.issue({
          body: `Hey @${context.payload.comment.user.login}, this issue is already assigned to @${context.payload.issue.assignee.login}! cc/ @codinasion/codinasion`,
        });
        await context.octokit.issues.createComment(issueComment);
      }
    }
  }
}
