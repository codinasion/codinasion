import * as core from '@actions/core'
import fs from 'fs'
import FetchToolsData from './fetch-tools-data'
import type { ToolsParameterType } from './types'

export default async function CollectToolsData({
  GITHUB_USERNAME,
  TOOLS_REPONAME,
  TOOLS_PATH,
  TOOLS_OUTPUT_PATH,
  GITHUB_TOKEN,
  TEST
}: ToolsParameterType): Promise<void> {
  try {
    // Fetch tools data from Github API
    const toolsData = await FetchToolsData({
      GITHUB_USERNAME,
      TOOLS_REPONAME,
      TOOLS_PATH,
      GITHUB_TOKEN,
      TEST
    })

    // Create tools data folder
    const TOOLS_FOLDER = TOOLS_OUTPUT_PATH
    await fs.promises.mkdir(TOOLS_FOLDER, { recursive: true })

    for (const tool of toolsData) {
      // Write tools data to file
      await fs.promises.writeFile(
        `${TOOLS_FOLDER}/${tool.slug}.json`,
        JSON.stringify(tool)
      )
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
