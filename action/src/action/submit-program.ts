import * as core from '@actions/core'
import { default as SubmitProgramFn } from '../submit-program/submit-program'
import dotenv from 'dotenv'

dotenv.config()

export default async function SubmitProgram(): Promise<void> {
  try {
    SubmitProgramFn({
      GITHUB_USERNAME: 'codinasion',
      GITHUB_REPONAME: 'codinasion',
      GITHUB_TOKEN:
        core.getInput('GITHUB_TOKEN') ||
        process.env.CODINASION_GITHUB_TOKEN ||
        '',
      SUBMIT_PROGRAM_USERNAME: core.getInput('SUBMIT_PROGRAM_USERNAME') || '',
      SUBMIT_PROGRAM_ISSUE_NUMBER:
        core.getInput('SUBMIT_PROGRAM_ISSUE_NUMBER') || '',
      SUBMIT_PROGRAM_TITLE: core.getInput('SUBMIT_PROGRAM_TITLE') || '',
      SUBMIT_PROGRAM_BODY: core.getInput('SUBMIT_PROGRAM_BODY') || ''
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// SubmitProgram();
