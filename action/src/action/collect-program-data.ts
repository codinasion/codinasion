import * as core from '@actions/core'
import { default as CollectProgramDataFn } from '../program/collect-program-data'
import dotenv from 'dotenv'

dotenv.config()

export default async function CollectProgramData(): Promise<void> {
  try {
    CollectProgramDataFn({
      GITHUB_USERNAME: 'codinasion',
      PROGRAM_REPONAME: 'codinasion',
      PROGRAM_PATH: 'program/program/',
      PROGRAM_OUTPUT_PATH: 'program-data',
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
// CollectProgramData();
