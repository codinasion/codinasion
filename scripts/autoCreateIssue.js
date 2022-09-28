import fs from "fs";

import fetch from "node-fetch";

export default async function autoCreateIssue(OWNER, REPO, TOKEN) {
  // read data from file
  const programFolderPath = "data";
  if (!fs.existsSync(programFolderPath)) {
    return;
  }
  const programFilePath = `${programFolderPath}/programs.json`;
  if (!fs.existsSync(programFilePath)) {
    return;
  }
  const languagesFilePath = `${programFolderPath}/languages.json`;
  if (!fs.existsSync(languagesFilePath)) {
    return;
  }
  const programData = await fs.readFileSync(programFilePath);
  // filter data for created=false
  const programDataJson = JSON.parse(programData);
  if (!programDataJson.length || programDataJson.length === 0) {
    return;
  }
  const filteredData = programDataJson.filter((item) => item.created === false);
  await console.log("filteredData => ", filteredData);

  const languagesData = await fs.readFileSync(languagesFilePath);
  const languagesDataJson = JSON.parse(languagesData);

  // select a random program from filtered data
  const randomProgram =
    filteredData[Math.floor(Math.random() * filteredData.length)];
  await console.log("randomProgram => ", randomProgram);

  const title = randomProgram.title;
  const trackTitle = `Write a program to ${title.toLowerCase()}`;
  var body = `### Description

${randomProgram.description}
`;

  if (randomProgram.contributor !== "harshraj8843") {
    body += `
<sub>Contributed by - @${randomProgram.contributor}</sub>
    `;
  }

  body += `

### Tracking Issues

`;
  await console.log("body => ", body);

  for (const language of languagesDataJson || []) {
    const track = trackTitle.replace("Write a ", `Write a ${language.name} `);
    body += `- [ ] ${track}
`;
  }

  await console.log("body => ", body);

  // create issue
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/issues`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${TOKEN}`,
      },
      body: JSON.stringify({
        title: title,
        body: body,
        labels: ["auto-track"],
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log("err => ", err));
  await console.log("response => ", response);

  // update created=true in programs.json
  const updatedData = programDataJson.map((item) => {
    if (item.title === title) {
      item.created = true;
      item.publishedAt = new Date().toISOString();
    }
    return item;
  });
  await console.log("updatedData => ", updatedData);

  // write updated data to file
  await fs.writeFileSync(
    programFilePath,
    JSON.stringify(updatedData, null, 2),
    (err) => {
      if (err) {
        console.log("err => ", err);
      }
    }
  );

  // add README.md for respective program
  const readmeFolderPath = "program/" + title.toLowerCase().replace(/ /g, "-");
  await console.log("readmeFolderPath => ", readmeFolderPath);
  if (!fs.existsSync(readmeFolderPath)) {
    await fs.mkdirSync(readmeFolderPath, { recursive: true });
  }
  const readmeFilePath = `${readmeFolderPath}/README.md`;
  await console.log("readmeFilePath => ", readmeFilePath);

  const readmeData = `---
title: ${title}
trackId: ${response.number}
---

## ${randomProgram.description}

---
`;
  await console.log("readmeData => ", readmeData);

  await fs.writeFileSync(readmeFilePath, readmeData, (err) => {
    if (err) {
      console.log("err => ", err);
    }
  });
}
