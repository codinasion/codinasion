import * as core from "@actions/core";

import fetch from "node-fetch";
import type { Response } from "node-fetch";

import type { GithubUserType } from "./types";

type ContributorResponseType = GithubUserType;

export default async function FetchContributorsData({
  REPOS_LIST,
  GITHUB_TOKEN,
  TEST,
}: {
  REPOS_LIST: string[];
  GITHUB_TOKEN: string;
  TEST: string;
}): Promise<ContributorResponseType[]> {
  try {
    // Fetch contributors from Github API
    const contributors: ContributorResponseType[] = [];

    for (const repo of REPOS_LIST) {
      core.debug(`Fetching contributors for ${repo}...`);
      const contributor_per_page = 100;
      let page = 1;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        let response: Response;
        if (GITHUB_TOKEN === "") {
          response = await fetch(
            `https://api.github.com/repos/${repo}/contributors?page=${page}&per_page=${contributor_per_page}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
        } else {
          response = await fetch(
            `https://api.github.com/repos/${repo}/contributors?page=${page}&per_page=${contributor_per_page}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
              },
            },
          );
        }

        if (!response.ok) {
          throw new Error(
            `Failed to fetch contributors: ${response.statusText}`,
          );
        }

        const responseData: unknown = await response.json();
        const contributorsResponse = responseData as ContributorResponseType[];

        core.debug(`Contributors fetched: ${contributorsResponse.length}`);
        contributors.push(...contributorsResponse);

        if (contributorsResponse.length < contributor_per_page) {
          break;
        }

        page++;

        if (TEST === "true") {
          break;
        }
      }

      if (TEST === "true") {
        break;
      }
    }

    core.debug(`Total contributors fetched: ${contributors.length}`);

    // Remove [BOT] users from contributors list
    const filteredContributors = contributors.filter(
      (contributor) => contributor.login.includes("[bot]") === false,
    );

    core.debug(
      `Total contributors excluding bots: ${filteredContributors.length}`,
    );

    return filteredContributors;
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
  return [];
}
