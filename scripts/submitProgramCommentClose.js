// Why this extra file ?
// In many cases, 'git commit' fails due to some reason. But, submit program action still
// comments success message and closes the issue. This script is to prevent this kind of issue.
// By this we will first commit the changes and then comment and close the issue.

import fetch from "node-fetch";

export default async function submitProgramCommentClose(
  OWNER,
  REPO,
  TOKEN,
  ISSUE_NUMBER,
  ISSUE_LABEL
) {
  // create comment on issue
  const commentResponse = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${TOKEN}`,
      },
      body: JSON.stringify({
        body: `Program added successfully :tada:

Thanks for your contribution :hugs:
`,
      }),
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log("e => ", e));
  await console.log("commentResponse => ", commentResponse);
  // close issue
  const closeIssueResponse = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${TOKEN}`,
      },
      body: JSON.stringify({
        state: "closed",
        labels: [`${ISSUE_LABEL}`, "submitted"],
      }),
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log("e => ", e));
  await console.log("closeIssueResponse => ", closeIssueResponse);
}
