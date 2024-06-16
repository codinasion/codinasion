import * as core from '@actions/core'
import { default as AutoTrackIssueFn } from '../submit-program/auto-track-issue'
import dotenv from 'dotenv'

dotenv.config()

export default async function AutoTrackIssue(): Promise<void> {
  try {
    AutoTrackIssueFn({
      GITHUB_USERNAME: 'codinasion',
      GITHUB_REPONAME: 'codinasion',
      GITHUB_TOKEN:
        core.getInput('GITHUB_TOKEN') ||
        process.env.CODINASION_GITHUB_TOKEN ||
        '',
      AUTO_TRACK_ISSUE_NUMBER: core.getInput('AUTO_TRACK_ISSUE_NUMBER') || '',
      AUTO_TRACK_ISSUE_TITLE: core.getInput('AUTO_TRACK_ISSUE_TITLE') || '',
      AUTO_TRACK_ISSUE_BODY: core.getInput('AUTO_TRACK_ISSUE_BODY') || ''
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// AutoTrackIssue();
