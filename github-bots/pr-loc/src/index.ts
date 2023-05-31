import { Probot } from "probot";

async function GetPRSize(pullRequest: any): Promise<string> {
  const linesOfCodeChanged = pullRequest.additions + pullRequest.deletions;

  // determine pull request size
  let pullRequestSize = "LOC: XS";
  if (linesOfCodeChanged < 10) {
    pullRequestSize = "LOC: XS";
  } else if (linesOfCodeChanged >= 10 && linesOfCodeChanged < 30) {
    pullRequestSize = "LOC: S";
  } else if (linesOfCodeChanged >= 30 && linesOfCodeChanged < 100) {
    pullRequestSize = "LOC: M";
  } else if (linesOfCodeChanged >= 100 && linesOfCodeChanged < 500) {
    pullRequestSize = "LOC: L";
  } else if (linesOfCodeChanged >= 500 && linesOfCodeChanged < 1000) {
    pullRequestSize = "LOC: XL";
  } else if (linesOfCodeChanged >= 1000) {
    pullRequestSize = "LOC: XXL";
  }

  return pullRequestSize;
}

export = (app: Probot) => {
  // on pull request opened
  app.on("pull_request.opened", async (context) => {
    // get the pull request
    const pullRequest = context.payload.pull_request;

    const pullRequestSize = await GetPRSize(pullRequest);

    // add pull request size label
    await context.octokit.issues.addLabels(
      context.issue({
        labels: [pullRequestSize],
      })
    );
  });

  // on pull request reopened
  app.on("pull_request.reopened", async (context) => {
    // get the pull request
    const pullRequest = context.payload.pull_request;

    const pullRequestSize = await GetPRSize(pullRequest);

    // get pull request labels
    const labels: any = context.payload.pull_request.labels;

    // if loc label exists
    if (labels.find((label: any) => label.name.startsWith("LOC: "))) {
      const locLabel = labels.find((label: any) =>
        label.name.startsWith("LOC: ")
      ).name;

      // if loc label is different
      if (locLabel !== pullRequestSize) {
        // remove loc label
        await context.octokit.issues.removeLabel(
          context.issue({
            name: locLabel,
          })
        );

        // add loc label
        await context.octokit.issues.addLabels(
          context.issue({
            labels: [pullRequestSize],
          })
        );
      }
    } else {
      // add loc label
      await context.octokit.issues.addLabels(
        context.issue({
          labels: [pullRequestSize],
        })
      );
    }
  });

  // on pull request edited
  app.on("pull_request.edited", async (context) => {
    // get the pull request
    const pullRequest = context.payload.pull_request;

    const pullRequestSize = await GetPRSize(pullRequest);

    // get pull request labels
    const labels: any = context.payload.pull_request.labels;

    // if loc label exists
    if (labels.find((label: any) => label.name.startsWith("LOC: "))) {
      const locLabel = labels.find((label: any) =>
        label.name.startsWith("LOC: ")
      ).name;

      // if loc label is different
      if (locLabel !== pullRequestSize) {
        // remove loc label
        await context.octokit.issues.removeLabel(
          context.issue({
            name: locLabel,
          })
        );

        // add loc label
        await context.octokit.issues.addLabels(
          context.issue({
            labels: [pullRequestSize],
          })
        );
      }
    } else {
      // add loc label
      await context.octokit.issues.addLabels(
        context.issue({
          labels: [pullRequestSize],
        })
      );
    }
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
