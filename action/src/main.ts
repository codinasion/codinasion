import * as core from "@actions/core";
import CollectProgramData from "./action/collect-program-data";
import CollectContributorsData from "./action/collect-contributors-data";
import TweetGFIData from "./action/tweet-gfi-data";
import TweetTrendingReposData from "./action/tweet-trending-repos-data";
import TweetQuoteData from "./action/tweet-quote-data";
import TweetMeme from "./action/tweet-meme";

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
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
