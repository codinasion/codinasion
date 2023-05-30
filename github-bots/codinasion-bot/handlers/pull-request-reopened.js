// export handler
module.exports = handler;

async function handler(app, context) {
  if (
    context.payload.pull_request.user.type === "Bot" ||
    context.payload.pull_request.user.login === "harshraj8843"
  ) {
    return;
  }

  // get pull request data
  const pull_request_data = context.payload.pull_request;

  // get user data from pull request context
  const user_data = pull_request_data.user;

  // log activity
  app.log.info(
    `${user_data.login} (${pull_request_data.author_association}) has reopened a pull request !!!`
  );

  // check for label 'closed' and remove it
  const labels = pull_request_data.labels;
  const closed_label = labels.find((label) => label.name === "closed");
  if (closed_label) {
    await context.octokit.issues.removeLabel(
      context.issue({
        name: "closed",
      })
    );
  }

  // check for label 'triage' and add it
  const triage_label = labels.find((label) => label.name === "triage");
  if (!triage_label) {
    await context.octokit.issues.addLabels(
      context.issue({
        labels: ["triage"],
      })
    );
  }

  // create new comment
  const new_comment = await context.issue({
    body: `This pull request has been reopened !!!`,
  });

  new_comment !== "" &&
    (await context.octokit.issues.createComment(new_comment));

  // remove [ 🚧 WIP ] or [Closed] from title
  const title = pull_request_data.title;
  if (title.includes("[ 🚧 WIP ] ")) {
    const new_title = title.replace("[ 🚧 WIP ] ", "");
    await context.octokit.pulls.update(
      context.pullRequest({
        title: new_title,
      })
    );
  }
  if (title.includes("[Closed] ")) {
    const new_title = title.replace("[Closed] ", "");
    await context.octokit.pulls.update(
      context.pullRequest({
        title: new_title,
      })
    );
  }
}
