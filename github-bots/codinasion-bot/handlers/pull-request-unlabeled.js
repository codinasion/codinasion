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
    `${user_data.login} (${pull_request_data.author_association}) has unlabeled a pull request !!!`
  );

  // check for unlabeled label
  const unlabeled_label = context.payload.label.name;
  if (unlabeled_label === "triage") {
    // check if pull request is closed
    if (pull_request_data.state === "closed") {
      return;
    }
    // check for label 'closed'
    const labels = pull_request_data.labels;
    const closed_label = labels.find((label) => label.name === "closed");
    if (closed_label === undefined) {
      // update pull request title
      const new_title = `[ 🚧 WIP ] ${pull_request_data.title}`;
      await context.octokit.pulls.update(
        context.pullRequest({
          title: new_title,
        })
      );
    }
  }
}
