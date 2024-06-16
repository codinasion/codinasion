import * as core from '@actions/core'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import type { UpdateIssuePropsType } from './types'

export default async function UpdateIssue({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  ISSUE_NUMBER,
  UPDATE_ISSUE_BODY,
  UPDATE_ISSUE_LABELS
}: UpdateIssuePropsType): Promise<void> {
  try {
    const response: Response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPONAME}/issues/${ISSUE_NUMBER}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`
        },
        body: JSON.stringify({
          body: UPDATE_ISSUE_BODY,
          labels: UPDATE_ISSUE_LABELS
        })
      }
    )

    if (!response.ok) {
      core.setFailed(
        `Failed to update issue: ${response.statusText} (${response.status})`
      )
    }

    const responseData: unknown = await response.json()

    core.debug(JSON.stringify(responseData))
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
