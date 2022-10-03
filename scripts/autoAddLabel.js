import fetch from "node-fetch";

export default async function autoAddLabel(OWNER, REPO, TOKEN, ISSUE_NUMBER) {
  //  add 'hacktoberfest-accepted' label to the issue
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/labels`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${TOKEN}`,
    },
    body: JSON.stringify({
      labels: ["hacktoberfest-accepted"],
    }),
  });
  const data = await response.json();
  await console.log(data);
}
