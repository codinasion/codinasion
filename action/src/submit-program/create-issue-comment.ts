import * as core from "@actions/core";
import fetch from "node-fetch";
import type { Response } from "node-fetch";
import type { CreateIssueCommentPropsType } from "./types";

export default async function CreateIssueComment({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  ISSUE_NUMBER,
  COMMENT_BODY,
}: CreateIssueCommentPropsType): Promise<void> {
  try {
    const response: Response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPONAME}/issues/${ISSUE_NUMBER}/comments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: COMMENT_BODY,
        }),
      },
    );

    if (!response.ok) {
      core.setFailed(
        `Failed to create comment: ${response.statusText} (${response.status})`,
      );
    }

    const responseData: unknown = await response.json();

    core.debug(JSON.stringify(responseData));
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
