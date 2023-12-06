import * as core from "@actions/core";
import fs from "fs";
import fetch from "node-fetch";
import { TwitterApi } from "twitter-api-v2";
import type { Response } from "node-fetch";

export default async function TweetMeme({
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET,
  TEST,
}: {
  TWITTER_APP_KEY: string;
  TWITTER_APP_SECRET: string;
  TWITTER_ACCESS_TOKEN: string;
  TWITTER_ACCESS_SECRET: string;
  TEST: string;
}): Promise<void> {
  try {
    const MEME_IMAGE_URL = "https://codinasion.tech/api/meme/image";

    // Generate meme image
    core.debug(`Generating meme image...`);
    const memeImageResponse: Response = await fetch(MEME_IMAGE_URL, {
      method: "GET",
    });

    if (!memeImageResponse.ok) {
      throw new Error(
        `Failed to generate meme image: ${memeImageResponse.statusText}`,
      );
    }

    // Save meme image buffer to image file
    const memeImage: Buffer = await memeImageResponse.buffer();
    const imageFile = "./meme.png";
    fs.writeFileSync(imageFile, memeImage);

    const tweet_text = `#programming #memes #funny #funnymemes #coding`;

    core.debug(`Tweet text: ${tweet_text}`);

    if (TEST === "true") {
      return;
    }

    // Tweet meme
    core.debug(`Tweeting meme...`);

    const twitterClient = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });

    const rwClient = twitterClient.readWrite;

    try {
      const mediaId = await twitterClient.v1.uploadMedia(imageFile);

      core.debug(`Successfully uploaded media: ${mediaId}`);

      await rwClient.v2.tweet({
        text: tweet_text,
        media: { media_ids: [mediaId] },
      });

      core.debug(`Successfully tweeted meme`);
    } catch (error) {
      throw new Error(`Failed to tweet meme: ${error}`);
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
