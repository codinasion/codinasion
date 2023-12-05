import * as core from "@actions/core";
import CollectProgramData from "./action/collect-program-data";
import CollectContributorsData from "./action/collect-contributors-data";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const TRIGGER_COLLECT_PROGRAM_DATA: string = core.getInput(
      "TRIGGER_COLLECT_PROGRAM_DATA",
    );
    if (TRIGGER_COLLECT_PROGRAM_DATA === "true") {
      await CollectProgramData();
    }

    const TRIGGER_COLLECT_CONTRIBUTORS_DATA: string = core.getInput(
      "TRIGGER_COLLECT_CONTRIBUTORS_DATA",
    );
    if (TRIGGER_COLLECT_CONTRIBUTORS_DATA === "true") {
      await CollectContributorsData();
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
