import * as core from "@actions/core";
import fetch from "node-fetch";
import type { Response } from "node-fetch";
import { EncodeURI } from "./utils";
import { LanguageList } from "./data";
import type { GoodFirstIssueType } from "./types";

export default async function FetchGFIData({
  GITHUB_TOKEN,
}: {
  GITHUB_TOKEN: string;
}): Promise<GoodFirstIssueType> {
  try {
    // Fetch latest Good First Issues from Github API
    const perPage = 1;
    const page = 1;
    // randomly select "updated" or "created"
    const searchMode =
      Math.floor(Math.random() * 2) === 0 ? "updated" : "created";
    const randomLanguage =
      LanguageList[Math.floor(Math.random() * LanguageList.length)];
    const requestURL = `https://api.github.com/search/issues?q=is%3Aissue+label%3A%22good+first+issue%22+label%3A${EncodeURI(
      randomLanguage,
    )}+state:open+no%3Aassignee&sort=${searchMode}&order=desc&per_page=${perPage}&page=${page}`;
    // core.debug(`Request URL: ${requestURL}`)
    const response: Response = await fetch(requestURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Good First Issues: ${response.statusText}`,
      );
    }

    const data = await response.json();

    const goodFirstIssue: GoodFirstIssueType = data.items[0];

    return goodFirstIssue;
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }

  return {} as GoodFirstIssueType;
}
