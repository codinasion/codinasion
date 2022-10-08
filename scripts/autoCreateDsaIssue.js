import fs from "fs";

import fetch from "node-fetch";

export default async function autoCreateDsaIssue(OWNER, REPO, TOKEN) {
  // read data from file
  const dsaFolderPath = "data";
  if (!fs.existsSync(dsaFolderPath)) {
    return;
  }
  const dsaFilePath = `${dsaFolderPath}/dsa.json`;
  if (!fs.existsSync(dsaFilePath)) {
    return;
  }
  const languagesFilePath = `${dsaFolderPath}/languages.json`;
  if (!fs.existsSync(languagesFilePath)) {
    return;
  }
  const dsaData = await fs.readFileSync(dsaFilePath);
  // filter data for created=false
  const dsaDataJson = JSON.parse(dsaData);
  if (!dsaDataJson.length || dsaDataJson.length === 0) {
    return;
  }
  const filteredData = dsaDataJson.filter((item) => item.created === false);
  await console.log("filteredData => ", filteredData);

  const languagesData = await fs.readFileSync(languagesFilePath);
  const languagesDataJson = JSON.parse(languagesData);

  // select a random dsa from filtered data
  const randomDsa =
    filteredData[Math.floor(Math.random() * filteredData.length)];
  await console.log("randomDsa => ", randomDsa);

  const title = randomDsa.title;
  const trackTitle = `Write a program for ${title.toLowerCase()}`;
  var body = `### Description

${randomDsa.description.trim()}
`;

  if (randomDsa.contributor !== "harshraj8843") {
    body += `
<sub>Contributed by - @${randomDsa.contributor}</sub>
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
        labels: ["auto-track-dsa"],
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log("err => ", err));
  await console.log("response => ", response);

  // update created=true in dsa.json
  const updatedData = dsaDataJson.map((item) => {
    if (item.title === title) {
      item.created = true;
      item.publishedAt = new Date().toISOString();
    }
    return item;
  });
  await console.log("updatedData => ", updatedData);

  // write updated data to file
  await fs.writeFileSync(
    dsaFilePath,
    JSON.stringify(updatedData, null, 2),
    (err) => {
      if (err) {
        console.log("err => ", err);
      }
    }
  );

  // add README.md for respective dsa
  const readmeFolderPath = "dsa/" + title.toLowerCase().replace(/ /g, "-");
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

## ${randomDsa.description.trim()}

---
`;
  await console.log("readmeData => ", readmeData);

  await fs.writeFileSync(readmeFilePath, readmeData, (err) => {
    if (err) {
      console.log("err => ", err);
    }
  });
}
