import * as core from '@actions/core'
import { default as TweetTrendingReposDataFn } from '../twitter/github/trending/repos/tweet-trending-repos-data'
import dotenv from 'dotenv'

dotenv.config()

export default async function TweetTrendingReposData(): Promise<void> {
  try {
    TweetTrendingReposDataFn({
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
      TEST: core.getInput('TEST') || 'true'
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// TweetTrendingReposData();
