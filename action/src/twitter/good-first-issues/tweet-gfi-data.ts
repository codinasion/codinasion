import * as core from "@actions/core";
import "dotenv/config";
import { TwitterApi } from "twitter-api-v2";
import FetchGFIData from "./fetch-gfi-data";
import type { GoodFirstIssueType } from "./types";

export default async function TweetGFIData({
  GITHUB_TOKEN,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET,
  TEST,
}: {
  GITHUB_TOKEN: string;
  TWITTER_APP_KEY: string;
  TWITTER_APP_SECRET: string;
  TWITTER_ACCESS_TOKEN: string;
  TWITTER_ACCESS_SECRET: string;
  TEST: string;
}): Promise<void> {
  try {
    // Fetch latest Good First Issues from Github API
    const goodFirstIssue: GoodFirstIssueType = await FetchGFIData({
      GITHUB_TOKEN,
    });

    const issue_title = goodFirstIssue.title;
    const issue_html_url = goodFirstIssue.html_url;
    const issue_labels = goodFirstIssue.labels
      .slice(0, 5)
      .map(
        (label) =>
          `#${label.name
            .toLowerCase()
            .replace(/ /g, "")
            .replace(/-/g, "")
            .replace(/#/g, "sharp")
            .replace(/\+/g, "plus")}`,
      )
      .join(" ");

    core.debug(`Good First Issue: ${issue_title}`);
    core.debug(`Good First Issue URL: ${issue_html_url}`);
    core.debug(`Good First Issue Labels: ${issue_labels}`);

    const tweet_text = `🚀 New to open source? Check out this "Good First Issue"! 💻

${issue_title}

${issue_html_url}

🛠️ ${issue_labels}`;

    core.debug(`Tweet Text: ${tweet_text}`);

    if (TEST === "true") {
      return;
    }

    // Tweet Good First Issue
    core.debug(`Tweeting Good First Issue...`);

    const twitterClient = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });

    const rwClient = twitterClient.readWrite;

    try {
      await rwClient.v2.tweet({
        text: tweet_text,
      });

      core.debug(`Successfully tweeted Good First Issue`);
    } catch (error) {
      throw new Error(`Failed to tweet Good First Issue: ${error}`);
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
