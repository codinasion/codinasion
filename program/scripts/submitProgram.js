import core from "@actions/core";

import fs from "fs";

import fetch from "node-fetch";

export default async function submitProgram(
  OWNER,
  REPO,
  TOKEN,
  USERNAME,
  ISSUE_NUMBER,
  ISSUE_TITLE,
  ISSUE_BODY,
  ISSUE_LABEL
) {
  await console.log("USERNAME => ", USERNAME);
  await console.log("ISSUE_NUMBER => ", ISSUE_NUMBER);
  await console.log("ISSUE_TITLE => ", ISSUE_TITLE);
  await console.log("ISSUE_BODY => ", ISSUE_BODY);

  await console.log(
    "-----------------------------------------------------------------"
  );

  var issue_body = ISSUE_BODY;

  issue_body = issue_body.replace("### Description", "").trim();

  const description = `Write a program to ${ISSUE_TITLE.toLowerCase()}

${issue_body}
`;
  await console.log("description => ", description);

  const data = {
    title: ISSUE_TITLE,
    description: description,
    contributor: USERNAME,
    createdAt: new Date().toISOString(),
    createdIssueNumber: ISSUE_NUMBER,
    publishedAt: "",
    created: false,
  };
  await console.log("data => ", data);

  // write data to file
  // read json data from file
  const programFolderPath = "data";
  // if folder does not exist then create it
  if (!fs.existsSync(programFolderPath)) {
    await fs.mkdirSync(programFolderPath);
  }
  const programFilePath = `${programFolderPath}/programs.json`;
  // create file if not exists
  if (!fs.existsSync(programFilePath)) {
    await fs.writeFileSync(programFilePath, JSON.stringify([]));
  }
  const prevData = await fs.readFileSync(programFilePath);
  const prevDataJson = JSON.parse(prevData);
  await console.log("prevDataJson => ", prevDataJson);
  // check if title already exists
  const isTitleExists = await prevDataJson.find(
    (item) => item.title === ISSUE_TITLE
  );
  if (isTitleExists) {
    await console.log("Title already exists");
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
          body: `Hey @${USERNAME}

It seems that this program already been submitted.

Please check the list of programs here: https://github.com/${OWNER}/${REPO}/blob/master/data/programs.json

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
          labels: [`${ISSUE_LABEL}`, "duplicate"],
        }),
      }
    )
      .then((res) => res.json())
      .catch((e) => console.log("e => ", e));
    await console.log("closeIssueResponse => ", closeIssueResponse);
    await core.setFailed("Title already exists");
    return;
  }
  // add new data to prev data
  var newData = [...prevDataJson, data];
  // sort data by title
  newData = newData.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  await console.log("newData => ", newData);
  // write new data to file
  await fs.writeFileSync(
    programFilePath,
    JSON.stringify(newData, null, 2),
    (err) => {
      if (err) {
        throw err;
      }
      console.log("program data written to file");
    }
  );
  await core.setOutput("submit-success", "true");
}
