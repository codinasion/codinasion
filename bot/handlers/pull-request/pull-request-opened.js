// export handler
module.exports = handler;

const GetPRSize = require("./get-pr-size");

async function handler(app, context) {
  // skip for bots
  if (context.payload.pull_request.user.type === "Bot") {
    return;
  }

  var new_comment = "";

  // get pull request data
  const pull_request_data = context.payload.pull_request;

  // get user data from pull request context
  const user_data = pull_request_data.user;

  // log activity
  app.log.info(
    `${user_data.login} (${pull_request_data.author_association}) has opened a pull request !!!`,
  );

  // pull request created by first time contributors
  if (pull_request_data.author_association === "FIRST_TIME_CONTRIBUTOR") {
    // new comment
    new_comment = await context.issue({
      body: `
💖💖💖 Congrats on raising your first pull request 💖💖💖`,
    });

    await context.octokit.issues.createComment(new_comment);

    // add reaction to the pull request
    await context.octokit.reactions.createForIssue(
      context.issue({
        content: "heart",
      }),
    );
  }

  // new comment
  new_comment = await context.issue({
    body: `
👋🏻 Hey @${user_data.login}

💖 Thanks for opening this pull request 💖

This PR will be reviewed and merged shortly.`,
  });

  // create new comment
  new_comment !== "" &&
    (await context.octokit.issues.createComment(new_comment));

  // add labels to the pull request
  await context.octokit.issues.addLabels(
    context.issue({
      labels: ["triage"],
    }),
  );

  /////////////////////////////////////////////////////////////////
  // Add Pull Request Size Label
  const pullRequestSize = await GetPRSize(pull_request_data);

  // add pull request size label
  await context.octokit.issues.addLabels(
    context.issue({
      labels: [pullRequestSize],
    }),
  );
}
