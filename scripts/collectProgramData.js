import fetch from "node-fetch";

import fs from "fs";

import dateFns from "date-fns";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function collectProgramData(
  OWNER,
  PROGRAM_REPO,
  PROGRAM_REPO_FOLDER,
  TOKEN
) {
  const programFileDir = "program-data/program";
  await fs.promises.mkdir(programFileDir, { recursive: true });

  const languages = await fetch(
    `https://raw.githubusercontent.com/codinasion/program/master/data/languages.json`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  ).then((res) => res.json());

  const programList = [];
  const pathsData = await fetch(
    `https://api.github.com/repos/${OWNER}/${PROGRAM_REPO}/git/trees/master?recursive=1`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.tree)
    .catch((error) => {
      console.log(error);
    });

  const filesData = [];

  for (const data of pathsData) {
    if (
      data.path.startsWith(PROGRAM_REPO_FOLDER + "/") &&
      data.path !== `${PROGRAM_REPO_FOLDER}/README.md` &&
      !data.path.endsWith(".png") &&
      !data.path.endsWith(".jpg") &&
      !data.path.endsWith(".jpeg") &&
      !data.path.endsWith(".gif") &&
      !data.path.endsWith(".svg")
    ) {
      let path = data.path.replace(PROGRAM_REPO_FOLDER + "/", "");
      if (path.includes("/")) {
        let slug = path.split("/")[0];
        let file = path.split("/")[1];
        // check if slug is already in the filesData array
        let index = filesData.findIndex(
          (programfile) => programfile.slug === slug
        );
        if (index === -1) {
          // if slug is not in the array, add it
          filesData.push({
            slug,
            files: [file],
          });
        } else {
          // if slug is in the array, add the file to the files array
          filesData[index].files.push(file);
        }
      }
    }
  }

  for (const data of filesData) {
    let slug = data.slug;
    let readme_text = await fetch(
      `https://raw.githubusercontent.com/${OWNER}/${PROGRAM_REPO}/master/${PROGRAM_REPO_FOLDER}/${slug}/README.md`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    )
      .then((res) => res.text())
      .catch((error) => console.log(error));

    var files = data.files;
    // remove README.md from files array
    files = files.filter((programfile) => programfile !== "README.md");
    const tags = [];

    for (const programfile of files) {
      let extension = programfile.split(".")[1];
      // find name of language from extension
      let language = languages.filter(
        (language) => language.fileExtension === extension
      )[0];
      if (language) {
        tags.push(language.name);
      }
    }

    let code_text = `
<CodeBlock slug="${slug}" >
`;

    for (const programfile of files) {
      let response_text = await fetch(
        `https://raw.githubusercontent.com/${OWNER}/${PROGRAM_REPO}/master/${PROGRAM_REPO_FOLDER}/${slug}/${programfile}`,
        {
          method: "GET",
          headers: {
            Authorization: `token ${TOKEN}`,
          },
        }
      )
        .then((res) => res.text())
        .catch((error) => console.log(error));

      code_text += `
\`\`\`${programfile.split(".")[1]}
${response_text.trim()}
\`\`\`
`;
    }

    code_text += `
</CodeBlock>
`;

    let source = `${readme_text.trim()}
${code_text}
`;

    let matterResult = await matter(source);

    let processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    let contentHtml = processedContent.toString();

    let latestUpdateDate = await fetch(
      `https://api.github.com/repos/${OWNER}/${PROGRAM_REPO}/commits?path=${PROGRAM_REPO_FOLDER}/${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res[0].commit.author.date)
      .catch((error) => {
        console.log(error);
        return dateFns.date.now();
      });

    let contributors = await fetch(
      `https://api.github.com/repos/${OWNER}/${PROGRAM_REPO}/commits?path=${PROGRAM_REPO_FOLDER}/${slug}`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res.map((commit) => commit.author.login))
      .catch((error) => {
        console.log(error);
      });
    // remove duplicate contributors
    contributors = [...new Set(contributors)];

    let programData = {
      slug,
      title: matterResult.data.title,
      trackId: matterResult.data.trackId,
      tags,
      contributors,
      contentHtml,
      markdown: matterResult.content,
      latestUpdateDate,
    };

    // save program data to file
    const filePath = `${programFileDir}/${slug}.json`;
    await fs.promises.writeFile(
      filePath,
      JSON.stringify(programData),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    await programList.push({
      slug,
      title: matterResult.data.title,
      trackId: matterResult.data.trackId,
      tags,
      contributors,
      latestUpdateDate,
    });
  }

  await console.log(programList);

  // save program list to file
  const filePath = `program-data/programList.json`;
  await fs.promises.writeFile(filePath, JSON.stringify(programList), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
