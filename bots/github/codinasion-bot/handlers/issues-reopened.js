// export handler
module.exports = handler;

async function handler(app, context) {
  //  check for label 'closed' and remove it
  const issue_data = context.payload.issue;
  const issue_labels = issue_data.labels;
  const closed_label = issue_labels.find((label) => label.name === "closed");
  if (closed_label) {
    await context.octokit.issues.removeLabel(
      context.issue({
        name: "closed",
      })
    );
  }

  // check for label 'triage' and add it
  const triage_label = issue_labels.find((label) => label.name === "triage");
  if (!triage_label) {
    await context.octokit.issues.addLabels(
      context.issue({
        labels: ["triage"],
      })
    );
  }
}
