import * as core from '@actions/core'
import { default as CollectToolsDataFn } from '../tools/collect-tools-data'
import dotenv from 'dotenv'

dotenv.config()

export default async function CollectToolsData(): Promise<void> {
  try {
    CollectToolsDataFn({
      GITHUB_USERNAME: 'codinasion',
      TOOLS_REPONAME: 'codinasion',
      TOOLS_PATH: 'content/tools/',
      TOOLS_OUTPUT_PATH: 'tools-data',
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
// CollectToolsData();
