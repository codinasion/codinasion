import * as core from '@actions/core'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import type { CreateIssuePropsType } from './types'

export default async function CreateIssue({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  ISSUE_TITLE,
  ISSUE_BODY,
  ISSUE_LABELS
}: CreateIssuePropsType): Promise<string> {
  try {
    const response: Response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPONAME}/issues`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`
        },
        body: JSON.stringify({
          title: ISSUE_TITLE,
          body: ISSUE_BODY,
          labels: ISSUE_LABELS
        })
      }
    )

    if (!response.ok) {
      core.setFailed(
        `Failed to create issue: ${response.statusText} (${response.status})`
      )
    }

    const responseData = (await response.json()) as { number: number }

    core.debug(JSON.stringify(responseData))

    return responseData.number.toString()
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }

  return ''
}
