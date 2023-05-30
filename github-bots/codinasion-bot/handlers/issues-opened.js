// export handler
module.exports = handler;

async function handler(app, context) {
  // skip for owner and bots
  if (
    context.payload.issue.user.type === "Bot" ||
    context.payload.issue.user.login === "harshraj8843"
  ) {
    return;
  }

  var new_comment = "";

  // get issue data
  const issue_data = context.payload.issue;

  // get user data from issue context
  const user_data = issue_data.user;

  // log activity
  app.log.info(
    `${user_data.login} (${issue_data.author_association}) has opened an issue !!!`
  );

  // issue created by first time contributors
  if (issue_data.author_association === "FIRST_TIME_CONTRIBUTOR") {
    // greet first time user
    new_comment = await context.issue({
      body: `
💖💖💖 Congrats on opening your first issue 💖💖💖`,
    });
    await context.octokit.issues.createComment(new_comment);

    // add reaction to the issue
    await context.octokit.reactions.createForIssue(
      context.issue({
        content: "heart",
      })
    );
  }

  // create new comment
  new_comment = await context.issue({
    body: `
👋🏻 Hey @${user_data.login}

💖 Thanks for opening this issue 💖

A team member should be by to give feedback soon.`,
  });

  await context.octokit.issues.createComment(new_comment);

  // add labels to the issue
  await context.octokit.issues.addLabels(
    context.issue({
      labels: ["triage"],
    })
  );
}
