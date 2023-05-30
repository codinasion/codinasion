// export handler
module.exports = handler;

async function handler(app, context) {
  if (
    context.payload.pull_request.user.type === "Bot" ||
    context.payload.pull_request.user.login === "harshraj8843"
  ) {
    return;
  }

  // check merged or closed
  const pull_request_data = context.payload.pull_request;
  const merged = pull_request_data.merged;

  // if merged
  if (merged) {
    // get user data from pull request context
    const user_data = pull_request_data.user;

    // log activity
    app.log.info(
      `${user_data.login} (${pull_request_data.author_association}) has merged a pull request !!!`
    );

    // merge comment
    const new_comment = await context.issue({
      body: `Thanks very much for contributing!

Your pull request has been merged 🎉 You should see your changes appear on the site in approximately 24 hours. 

Support this project by giving it a star ⭐.

If you're looking for your next contribution, check out our [help wanted issues](https://github.com/search?q=is%3Aopen+label%3A%22help+wanted%22+user%3Acodinasion&type=Issues) :zap:`,
    });
    new_comment !== "" &&
      (await context.octokit.issues.createComment(new_comment));

    // remove [ 🚧 WIP ] from title
    const title = pull_request_data.title;
    if (title.includes("[ 🚧 WIP ]")) {
      const new_title = title.replace("[ 🚧 WIP ] ", "");
      await context.octokit.pulls.update(
        context.pullRequest({
          title: new_title,
        })
      );
    }

    // check for label "triage" and remove it
    const triage_label = pull_request_data.labels.find(
      (label) => label.name === "triage"
    );
    if (triage_label) {
      await context.octokit.issues.removeLabel(
        context.issue({
          name: "triage",
        })
      );
    }
  } else {
    // if closed

    // check for label 'triage' and remove it
    const labels = pull_request_data.labels;
    const triage_label = labels.find((label) => label.name === "triage");
    if (triage_label) {
      await context.octokit.issues.removeLabel(
        context.issue({
          name: "triage",
        })
      );
    }

    // check for label 'closed' and add it
    const closed_label = labels.find((label) => label.name === "closed");
    if (!closed_label) {
      await context.octokit.issues.addLabels(
        context.issue({
          labels: ["closed"],
        })
      );
    }

    // create new comment
    const new_comment = await context.issue({
      body: `This pull request has been closed !!!`,
    });

    // create new comment
    new_comment !== "" &&
      (await context.octokit.issues.createComment(new_comment));

    // replace [ 🚧 WIP ] with [Closed] in title
    const pull_request_title = pull_request_data.title;
    const wip_title = pull_request_title.includes("[ 🚧 WIP ]");
    if (wip_title) {
      const new_title = pull_request_title.replace("[ 🚧 WIP ]", "[Closed]");
      await context.octokit.pulls.update(
        context.pullRequest({
          title: new_title,
        })
      );
    } else {
      // add [Closed] to the title
      const new_title = `[Closed] ${pull_request_title}`;
      await context.octokit.pulls.update(
        context.pullRequest({
          title: new_title,
        })
      );
    }
  }
}
