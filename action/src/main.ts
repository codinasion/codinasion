import * as core from "@actions/core";
import CollectProgramData from "./action/collect-program-data";
import CollectContributorsData from "./action/collect-contributors-data";
import TweetGFIData from "./action/tweet-gfi-data";
import TweetTrendingReposData from "./action/tweet-trending-repos-data";
import TweetQuoteData from "./action/tweet-quote-data";
import TweetMeme from "./action/tweet-meme";
import SubmitProgram from "./action/submit-program";
import SubmitProgramCommentClose from "./action/submit-program comment-close";
import AutoCreateIssue from "./action/auto-create-issue";
import AutoTrackIssue from "./action/auto-track-issue";

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

    const TRIGGER_TWEET_GFI_DATA: string = core.getInput(
      "TRIGGER_TWEET_GFI_DATA",
    );
    if (TRIGGER_TWEET_GFI_DATA === "true") {
      await TweetGFIData();
    }

    const TRIGGER_TWEET_TRENDING_REPOS_DATA: string = core.getInput(
      "TRIGGER_TWEET_TRENDING_REPOS_DATA",
    );
    if (TRIGGER_TWEET_TRENDING_REPOS_DATA === "true") {
      await TweetTrendingReposData();
    }

    const TRIGGER_TWEET_QUOTE_DATA: string = core.getInput(
      "TRIGGER_TWEET_QUOTE_DATA",
    );
    if (TRIGGER_TWEET_QUOTE_DATA === "true") {
      await TweetQuoteData();
    }

    const TRIGGER_TWEET_MEME: string = core.getInput("TRIGGER_TWEET_MEME");
    if (TRIGGER_TWEET_MEME === "true") {
      await TweetMeme();
    }

    const TRIGGER_SUBMIT_PROGRAM: string = core.getInput(
      "TRIGGER_SUBMIT_PROGRAM",
    );
    if (TRIGGER_SUBMIT_PROGRAM === "true") {
      await SubmitProgram();
    }

    const TRIGGER_SUBMIT_PROGRAM_COMMENT_CLOSE: string = core.getInput(
      "TRIGGER_SUBMIT_PROGRAM_COMMENT_CLOSE",
    );
    if (TRIGGER_SUBMIT_PROGRAM_COMMENT_CLOSE === "true") {
      await SubmitProgramCommentClose();
    }

    const TRIGGER_AUTO_CREATE_ISSUE: string = core.getInput(
      "TRIGGER_AUTO_CREATE_ISSUE",
    );
    if (TRIGGER_AUTO_CREATE_ISSUE === "true") {
      await AutoCreateIssue();
    }

    const TRIGGER_AUTO_TRACK_ISSUE: string = core.getInput(
      "TRIGGER_AUTO_TRACK_ISSUE",
    );
    if (TRIGGER_AUTO_TRACK_ISSUE === "true") {
      await AutoTrackIssue();
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
