import * as core from "@actions/core";

import fs from "fs";

import FetchContributors from "./fetch-contributors-data";

export default async function CollectContributorsData({
  REPOS_LIST,
  CONTRIBUTOR_OUTPUT_PATH,
  GITHUB_TOKEN,
  TEST,
}: {
  REPOS_LIST: string[];
  CONTRIBUTOR_OUTPUT_PATH: string;
  GITHUB_TOKEN: string;
  TEST: string;
}): Promise<void> {
  try {
    // Fetch contributors from Github API
    const contributors = await FetchContributors({
      REPOS_LIST,
      GITHUB_TOKEN,
      TEST,
    });

    if (TEST !== "true") {
      // create github contributors data folder
      await fs.promises.mkdir(CONTRIBUTOR_OUTPUT_PATH, { recursive: true });

      const contributorList: string[] = [];

      for (const contributor of contributors) {
        if (contributorList.some((e) => e === contributor.login)) {
          continue;
        } else {
          contributorList.push(contributor.login);
        }
      }

      // Write contributors to file
      await fs.promises.writeFile(
        `${CONTRIBUTOR_OUTPUT_PATH}/contributors.json`,
        JSON.stringify(contributorList, null, 2),
      );
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
