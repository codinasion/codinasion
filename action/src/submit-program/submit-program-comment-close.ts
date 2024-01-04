/**
 * Purpose: Notify the user & close the issue (only after pull request is created)
 */

import * as core from "@actions/core";
import CreateIssueComment from "./create-issue-comment";
import CloseIssue from "./close-issue";
import type { SubmitProgramCommentClosePropsType } from "./types";

export default async function SubmitProgramCommentClose({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  SUBMIT_PROGRAM_ISSUE_NUMBER,
}: SubmitProgramCommentClosePropsType): Promise<void> {
  try {
    // Create a comment on the issue
    await CreateIssueComment({
      GITHUB_USERNAME,
      GITHUB_REPONAME,
      GITHUB_TOKEN,
      ISSUE_NUMBER: SUBMIT_PROGRAM_ISSUE_NUMBER,
      COMMENT_BODY: `Program added successfully :tada:

Thanks for your contribution :hugs:`,
    });

    // Close the issue
    await CloseIssue({
      GITHUB_USERNAME,
      GITHUB_REPONAME,
      GITHUB_TOKEN,
      ISSUE_NUMBER: SUBMIT_PROGRAM_ISSUE_NUMBER,
      CLOSING_LABELS: ["submit-program", "submitted"],
    });
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
