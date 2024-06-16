import * as core from '@actions/core'
import matter from 'gray-matter'
import FetchToolsList from './fetch-tools-list'
import type { ToolsDataType, ToolsDataParameterType } from './types'

type ToolsDataResponseType = ToolsDataType

export default async function FetchToolsData({
  GITHUB_USERNAME,
  TOOLS_REPONAME,
  TOOLS_PATH,
  GITHUB_TOKEN,
  TEST
}: ToolsDataParameterType): Promise<ToolsDataResponseType[]> {
  try {
    // Fetch tools list from Github GraphQL API
    const toolsList = await FetchToolsList({
      GITHUB_USERNAME,
      TOOLS_REPONAME,
      TOOLS_PATH,
      GITHUB_TOKEN
    })

    const toolsDataList: ToolsDataResponseType[] = []

    for (const tool of toolsList) {
      const matterResult = matter(tool.text)

      const toolData = {
        slug: matterResult.data.slug,
        markdown: matterResult.content
      }

      toolsDataList.push(toolData as ToolsDataResponseType)

      if (TEST === 'true') {
        break
      }
    }

    core.debug(`Total ${toolsDataList.length} tools fetched`)

    return toolsDataList
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
  return []
}
