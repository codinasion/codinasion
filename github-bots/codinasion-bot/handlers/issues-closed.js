// export handler
module.exports = handler;

async function handler(app, context) {
  // check for label 'triage' and remove it
  const issue_data = context.payload.issue;
  const labels = issue_data.labels;
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
}
