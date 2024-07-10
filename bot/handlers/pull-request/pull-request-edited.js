// export handler
module.exports = handler;

const GetPRSize = require("./get-pr-size");

async function handler(app, context) {
  // get the pull request
  const pullRequest = context.payload.pull_request;

  const pullRequestSize = await GetPRSize(pullRequest);

  // get pull request labels
  const labels = context.payload.pull_request.labels;

  // if loc label exists
  if (labels.find((label) => label.name.startsWith("LOC: "))) {
    const locLabel = labels.find((label) =>
      label.name.startsWith("LOC: "),
    ).name;

    // if loc label is different
    if (locLabel !== pullRequestSize) {
      // remove loc label
      await context.octokit.issues.removeLabel(
        context.issue({
          name: locLabel,
        }),
      );

      // add loc label
      await context.octokit.issues.addLabels(
        context.issue({
          labels: [pullRequestSize],
        }),
      );
    }
  } else {
    // add loc label
    await context.octokit.issues.addLabels(
      context.issue({
        labels: [pullRequestSize],
      }),
    );
  }
}
