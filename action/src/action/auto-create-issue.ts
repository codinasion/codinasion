import * as core from '@actions/core'
import { default as AutoCreateIssueFn } from '../submit-program/auto-create-issue'
import dotenv from 'dotenv'

dotenv.config()

export default async function AutoCreateIssue(): Promise<void> {
  try {
    AutoCreateIssueFn({
      GITHUB_USERNAME: 'codinasion',
      GITHUB_REPONAME: 'codinasion',
      GITHUB_TOKEN:
        core.getInput('GITHUB_TOKEN') ||
        process.env.CODINASION_GITHUB_TOKEN ||
        ''
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// AutoCreateIssue();
