import * as core from '@actions/core'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import type { ToolsListParameterType, ToolsListType } from './types'

export default async function FetchToolsList({
  GITHUB_USERNAME,
  TOOLS_REPONAME,
  TOOLS_PATH,
  GITHUB_TOKEN
}: ToolsListParameterType): Promise<ToolsListType[]> {
  try {
    // Fetch tools list from Github GraphQL API
    core.debug(`Fetching tools list...`)
    const query = `{
      repository(owner: "${GITHUB_USERNAME}", name: "${TOOLS_REPONAME}") {
        object(expression: "HEAD:${TOOLS_PATH}") {
          ... on Tree {
            entries {
              name
              object {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }`

    const response: Response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch tools list: ${response.statusText}`)
    }

    const responseData: unknown = await response.json()

    const entries = (
      responseData as {
        data: {
          repository: {
            object: {
              entries: {
                name: string
                object: {
                  text: string
                }
              }[]
            }
          }
        }
      }
    ).data.repository.object.entries

    const toolsList: {
      filename: string
      text: string
    }[] = []

    for (const entry of entries) {
      toolsList.push({
        filename: entry.name,
        text: entry.object.text
      })
    }

    core.debug(`Total ${toolsList.length} tools fetched`)

    return toolsList
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }

  return []
}
