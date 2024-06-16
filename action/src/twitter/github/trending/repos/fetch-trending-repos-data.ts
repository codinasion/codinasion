import * as core from '@actions/core'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import type { TrendingRepoType } from './types'

function isTrendingRepoTypeArray(data: unknown): data is TrendingRepoType[] {
  return (
    Array.isArray(data) &&
    data.every(
      item =>
        typeof item === 'object' &&
        item !== null &&
        'repoName' in item &&
        typeof item.repoName === 'string'
    )
  )
}

export default async function FetchTrendingReposData(): Promise<
  TrendingRepoType[]
> {
  try {
    // Source: https://github.com/alisoft/github-trending-api
    const TRENDING_REPOS_API_URL = 'https://api.gitterapp.com'

    // Fetch trending repos
    const response: Response = await fetch(TRENDING_REPOS_API_URL, {
      method: 'GET'
    })

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending repos with status code: ${response.status}`
      )
    }

    const data = await response.json()

    if (!isTrendingRepoTypeArray(data)) {
      throw new Error('Invalid data format')
    }

    core.debug(`Total trending repos fetched: ${data.length}`)

    return data
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }

  return []
}
