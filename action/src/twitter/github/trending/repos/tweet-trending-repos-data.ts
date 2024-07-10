import * as core from '@actions/core'
import fs from 'fs'
import fetch from 'node-fetch'
import { TwitterApi } from 'twitter-api-v2'
import FetchTrendingReposData from './fetch-trending-repos-data'
import type { Response } from 'node-fetch'
import type { TrendingRepoType } from './types'

export default async function TweetTrendingReposData({
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
    const OG_IMAGE_URL =
      'https://og-codinasion.vercel.app/github/trending/repos'

    // Fetch trending repos
    const trendingRepos: TrendingRepoType[] = await FetchTrendingReposData()

    // Generate trending repos og image
    core.debug(`Generating trending repos og image...`)
    const ogImageResponse: Response = await fetch(OG_IMAGE_URL, {
      method: 'GET'
    })

    if (!ogImageResponse.ok) {
      throw new Error(
        `Failed to generate trending repos og image: ${ogImageResponse.statusText}`
      )
    }

    // Save og image buffer to image file
    const ogImage: Buffer = await ogImageResponse.buffer()
    const imageFile = './trending-repos.png'
    fs.writeFileSync(imageFile, ogImage)

    const tweet_text = `🚀 Here are the top trending GitHub repositories:

🥇 ${trendingRepos[0].url} 🌟
🥈 ${trendingRepos[1].url} 🌟
🥉 ${trendingRepos[2].url} 🌟

Dive in and get inspired 🛠️ #GitHub #TrendingRepos`

    core.debug(`Tweet text: ${tweet_text}`)

    if (TEST === 'true') {
      return
    }

    // Tweet trending repos
    core.debug(`Tweeting trending repos...`)

    const twitterClient = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET
    })

    const rwClient = twitterClient.readWrite

    try {
      const mediaId = await twitterClient.v1.uploadMedia(imageFile)

      core.debug(`Successfully uploaded media: ${mediaId}`)

      await rwClient.v2.tweet({
        text: tweet_text,
        media: { media_ids: [mediaId] }
      })

      core.debug(`Successfully tweeted trending repos`)
    } catch (error) {
      throw new Error(`Failed to tweet trending repos: ${error}`)
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
