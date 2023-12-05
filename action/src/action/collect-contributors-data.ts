import * as core from "@actions/core";
import { default as CollectContributorsDataFn } from "../contributors/collect-contributors-data";
import dotenv from "dotenv";

dotenv.config();

export default async function CollectContributorsData(): Promise<void> {
  try {
    CollectContributorsDataFn({
      REPOS_LIST: [
        "codinasion/codinasion",
        "codinasion-archive/codinasion-programme",
      ],
      CONTRIBUTOR_OUTPUT_PATH: "contributors-data",
      GITHUB_TOKEN:
        core.getInput("GITHUB_TOKEN") ||
        process.env.CODINASION_GITHUB_TOKEN ||
        "",
      TEST: core.getInput("TEST") || "true",
    });
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}

// // Test the function
// CollectContributorsData();
