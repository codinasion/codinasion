import fs from "fs";

import fetch from "node-fetch";

import sleep from "./sleep.js";
import fileNaming from "./fileNaming.js";

export default async function autoTrackIssue(
  OWNER,
  REPO,
  TOKEN,
  ISSUE_NUMBER,
  ISSUE_TITLE,
  ISSUE_BODY
) {
  await console.log("OWNER => ", OWNER);
  await console.log("REPO => ", REPO);
  await console.log("ISSUE_NUMBER => ", ISSUE_NUMBER);
  await console.log("ISSUE_TITLE => ", ISSUE_TITLE);
  await console.log("ISSUE_BODY => ", ISSUE_BODY);

  await console.log(
    "-----------------------------------------------------------------"
  );

  var issue_body = ISSUE_BODY;

  const description = await issue_body.split("### Tracking Issues")[0];
  await console.log("description => ", description.trim());

  // derive tracking issues from issue body
  const tracking_issues = await issue_body.split("### Tracking Issues")[1];
  await console.log("tracking_issues => ", tracking_issues);

  // get list of sentences from tracking issues
  const tracking_issues_sentences = await tracking_issues.split("\n");
  await console.log("tracking_issues_sentences => ", tracking_issues_sentences);

  // tracking issues json
  const tracking_issues_json = [];

  // iterate over tracking issues sentences
  for (const each_sentence of tracking_issues_sentences) {
    // check for pattern '- [ ] '
    if (each_sentence.startsWith("- [ ] ")) {
      // get sentence
      const sentence = await each_sentence.split("- [ ] ")[1];

      // get language tag from sentence
      // get words like C C++ C# Java Python GO JavaScript PHP Julia, etc
      var language_tag = await sentence.split("Write a ")[1];
      language_tag = await language_tag.split(" program ")[0];

      // append to tracking issues json
      await tracking_issues_json.push({
        language_tag: language_tag,
        sentence: sentence,
      });
    }
  }
  await console.log("tracking_issues_json => ", tracking_issues_json);

  const programFolderPath = "data";
  if (!fs.existsSync(programFolderPath)) {
    return;
  }
  const languagesFilePath = `${programFolderPath}/languages.json`;
  if (!fs.existsSync(languagesFilePath)) {
    return;
  }
  const languagesData = await fs.readFileSync(languagesFilePath);
  const languagesDataJson = JSON.parse(languagesData);

  for (const each_object of tracking_issues_json) {
    let filename = await `${each_object.sentence}`
      .replace(`Write a ${each_object.language_tag} program to `, "")
      .trim();
    let languageData = languagesDataJson.find(
      (item) => item.name === each_object.language_tag.trim()
    );
    let file = await fileNaming(filename, languageData);
    var issueDescription = await description
      .replace("Write a program", `Write a ${each_object.language_tag} program`)
      .trim();
    issueDescription += `
<details>
<summary>How to contribute</summary>

- Save the solution in \`program/${file}\` file
- Add \`${file}\` file in \`${filename
      .toLowerCase()
      .replace(/ /g, "-")}\` folder

</details>
    `;
    const created_issue_response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `token ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `${each_object.sentence}`,
          body: `${issueDescription}`,
          labels: [each_object.language_tag, "good first issue"],
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });

    await console.log("created_issue_response => ", created_issue_response);

    issue_body = await issue_body.replace(
      `${each_object.sentence}`,
      `#${created_issue_response.number}`
    );

    // wait for 5 second
    // to prevent github api secondary rate limit
    await sleep(5000);
  }

  await console.log("issue_body => ", issue_body);

  await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `token ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: `${issue_body}`,
        labels: ["auto-track", "tweet-it", "tweet-confirm"],
      }),
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}
