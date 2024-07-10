import * as core from '@actions/core'
import { default as TweetGFIDataFn } from '../twitter/good-first-issues/tweet-gfi-data'
import dotenv from 'dotenv'

dotenv.config()

export default async function TweetGFIData(): Promise<void> {
  try {
    TweetGFIDataFn({
      TWITTER_APP_KEY:
        core.getInput('TWITTER_APP_KEY') || process.env.TWITTER_APP_KEY || '',
      TWITTER_APP_SECRET:
        core.getInput('TWITTER_APP_SECRET') ||
        process.env.TWITTER_APP_SECRET ||
        '',
      TWITTER_ACCESS_TOKEN:
        core.getInput('TWITTER_ACCESS_TOKEN') ||
        process.env.TWITTER_ACCESS_TOKEN ||
        '',
      TWITTER_ACCESS_SECRET:
        core.getInput('TWITTER_ACCESS_SECRET') ||
        process.env.TWITTER_ACCESS_SECRET ||
        '',
      GITHUB_TOKEN:
        core.getInput('GITHUB_TOKEN') ||
        process.env.CODINASION_GITHUB_TOKEN ||
        '',
      TEST: core.getInput('TEST') || 'true'
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// TweetGFIData();
