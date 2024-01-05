import * as core from "@actions/core";
import fs from "fs";
import { wait } from "../wait";
import FileNaming from "./file-naming";
import CreateIssue from "./create-issue";
import UpdateIssue from "./update-issue";
import type { LanguageDataType, AutoTrackIssuePropsType } from "./types";

export default async function AutoTrackIssue({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  AUTO_TRACK_ISSUE_NUMBER,
  AUTO_TRACK_ISSUE_TITLE,
  AUTO_TRACK_ISSUE_BODY,
}: AutoTrackIssuePropsType): Promise<void> {
  try {
    // Debug props
    core.debug(`GITHUB_USERNAME: ${GITHUB_USERNAME}`);
    core.debug(`GITHUB_REPONAME: ${GITHUB_REPONAME}`);
    // core.debug(`GITHUB_TOKEN: ${GITHUB_TOKEN}`);
    core.debug(`AUTO_TRACK_ISSUE_NUMBER: ${AUTO_TRACK_ISSUE_NUMBER}`);
    core.debug(`AUTO_TRACK_ISSUE_TITLE: ${AUTO_TRACK_ISSUE_TITLE}`);
    core.debug(`AUTO_TRACK_ISSUE_BODY: ${AUTO_TRACK_ISSUE_BODY}`);

    let ISSUE_BODY = AUTO_TRACK_ISSUE_BODY;

    const ISSUE_DESCRIPTION = ISSUE_BODY.split("<!-- Tracking Issues -->")[0];
    core.debug(`ISSUE_DESCRIPTION: ${ISSUE_DESCRIPTION}`);

    const TRACKING_ISSUES = ISSUE_BODY.split("<!-- Tracking Issues -->")[1];
    core.debug(`TRACKING_ISSUES: ${TRACKING_ISSUES}`);

    const TRACKING_ISSUES_LIST = TRACKING_ISSUES.split("\n");
    core.debug(`TRACKING_ISSUES_LIST: ${TRACKING_ISSUES_LIST}`);

    const TRACKING_ISSUES_JSON = [];

    for (const TRACKING_ISSUE of TRACKING_ISSUES_LIST) {
      if (TRACKING_ISSUE.startsWith("- [ ] ")) {
        const TRACKING_ISSUE_SENTENCE = TRACKING_ISSUE.split("- [ ] ")[1];

        // get language tag from sentence
        // get words like C C++ C# Java Python GO JavaScript PHP Julia, etc
        let LANGUAGE_TAG = TRACKING_ISSUE_SENTENCE.split("Write a ")[1];
        LANGUAGE_TAG = LANGUAGE_TAG.split(" program ")[0];

        // append to tracking issues json
        TRACKING_ISSUES_JSON.push({
          language_tag: LANGUAGE_TAG,
          sentence: TRACKING_ISSUE_SENTENCE,
        });
      }
    }
    core.debug(`TRACKING_ISSUES_JSON: ${TRACKING_ISSUES_JSON}`);

    const programDataFolderPath = "program/data";
    if (!fs.existsSync(programDataFolderPath)) {
      core.info(`No program data folder found at ${programDataFolderPath}`);
      return;
    }

    const languagesDataFilePath = `${programDataFolderPath}/languages.json`;
    if (!fs.existsSync(languagesDataFilePath)) {
      core.info(`No languages data file found at ${languagesDataFilePath}`);
      return;
    }

    // Read languages data
    const languagesData: LanguageDataType[] = JSON.parse(
      fs.readFileSync(languagesDataFilePath, "utf8"),
    );

    for (const TRACKING_ISSUE of TRACKING_ISSUES_JSON) {
      const FILE_NAME = TRACKING_ISSUE.sentence
        .replace(`Write a ${TRACKING_ISSUE.language_tag} program to `, "")
        .trim();

      const languageData = languagesData.find(
        (language) => language.name === TRACKING_ISSUE.language_tag.trim(),
      );

      const FILE = FileNaming(FILE_NAME, languageData as LanguageDataType);
      core.debug(`FILE: ${FILE}`);

      let LANGUAGE_ISSUE_BODY = ISSUE_DESCRIPTION.replace(
        "Write a program",
        `Write a ${TRACKING_ISSUE.language_tag} program`,
      ).trim();

      LANGUAGE_ISSUE_BODY += `
<details>
<summary>How to contribute</summary>

- Fork this repository
- Create a new branch
- Save the solution in \`program/program/${FILE_NAME.toLowerCase().replace(
        / /g,
        "-",
      )}/${FILE}\`
- Commit the changes
- Create a pull request

</details>
`;

      // Create issue
      const ISSUE_NUMBER = await CreateIssue({
        GITHUB_USERNAME,
        GITHUB_REPONAME,
        GITHUB_TOKEN,
        ISSUE_TITLE: TRACKING_ISSUE.sentence,
        ISSUE_BODY: LANGUAGE_ISSUE_BODY,
        ISSUE_LABELS: [
          "program",
          TRACKING_ISSUE.language_tag,
          "good first issue",
        ],
      });
      core.debug(`ISSUE_NUMBER: ${ISSUE_NUMBER}`);

      // Update auto-track issue body
      ISSUE_BODY = ISSUE_BODY.replace(
        `${TRACKING_ISSUE.sentence}`,
        `#${ISSUE_NUMBER}`,
      );

      // Wait for 5 seconds
      await wait(5000);
    }

    core.debug(`ISSUE_BODY: ${ISSUE_BODY}`);

    // Update auto-track issue body
    await UpdateIssue({
      GITHUB_USERNAME,
      GITHUB_REPONAME,
      GITHUB_TOKEN,
      ISSUE_NUMBER: AUTO_TRACK_ISSUE_NUMBER,
      UPDATE_ISSUE_BODY: ISSUE_BODY,
      UPDATE_ISSUE_LABELS: ["auto-track", "program"],
    });
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
