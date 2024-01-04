import * as core from "@actions/core";
import { default as SubmitProgramCommentCloseFn } from "../submit-program/submit-program-comment-close";
import dotenv from "dotenv";

dotenv.config();

export default async function SubmitProgramCommentClose(): Promise<void> {
  try {
    SubmitProgramCommentCloseFn({
      GITHUB_USERNAME: "codinasion",
      GITHUB_REPONAME: "codinasion",
      GITHUB_TOKEN:
        core.getInput("GITHUB_TOKEN") ||
        process.env.CODINASION_GITHUB_TOKEN ||
        "",
      SUBMIT_PROGRAM_ISSUE_NUMBER:
        core.getInput("SUBMIT_PROGRAM_ISSUE_NUMBER") || "",
    });
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}

// // Test the function
// SubmitProgramCommentClose();
