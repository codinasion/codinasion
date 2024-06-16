import * as core from '@actions/core'
import { TwitterApi } from 'twitter-api-v2'
import FetchQuoteData from './fetch-quote-data'
import type { QuoteType } from './types'

export default async function TweetQuoteData({
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET,
  TEST
}: {
  TWITTER_APP_KEY: string
  TWITTER_APP_SECRET: string
  TWITTER_ACCESS_TOKEN: string
  TWITTER_ACCESS_SECRET: string
  TEST: string
}): Promise<void> {
  try {
    // Fetch quote data
    const quote: QuoteType = await FetchQuoteData()

    const tweet_text = `🙶 ${quote.content} 🙷

- ${quote.author}`

    core.debug(`Tweet Text: ${tweet_text}`)

    if (TEST === 'true') {
      return
    }

    // Tweet quote data
    core.debug(`Tweeting quote data...`)

    const twitterClient = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET
    })

    const rwClient = twitterClient.readWrite

    try {
      await rwClient.v2.tweet({
        text: tweet_text
      })

      core.debug(`Successfully tweeted quote data!`)
    } catch (error) {
      throw new Error(`Failed to tweet quote data: ${error}`)
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
