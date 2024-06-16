import * as core from '@actions/core'
import fetch from 'node-fetch'
import type { Response } from 'node-fetch'
import type { BlogListParameterType, BlogFileType } from './types'

async function fetchBlogList({
  GITHUB_USERNAME,
  BLOG_REPONAME,
  BLOG_PATH,
  GITHUB_TOKEN,
  TEST,
  BLOG_LIST,
  FETCH_FOLDER
}: BlogListParameterType & {
  BLOG_LIST: BlogFileType[]
  FETCH_FOLDER: string
}): Promise<BlogFileType[]> {
  const queryPath = FETCH_FOLDER
  const query = `{
      repository(owner: "${GITHUB_USERNAME}", name: "${BLOG_REPONAME}") {
        object(expression: "HEAD:${queryPath}") {
          ... on Tree {
            entries {
              name
              path
              type
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
    throw new Error(`Failed to fetch blog list: ${response.statusText}`)
  }

  const responseData: unknown = await response.json()

  const entries = (
    responseData as {
      data: {
        repository: {
          object: {
            entries: {
              name: string
              path: string
              type: string
              object: {
                text: string
              }
            }[]
          }
        }
      }
    }
  ).data.repository.object.entries

  for (const entry of entries) {
    if (entry.type === 'blob') {
      if (!BLOG_LIST.find(blog => blog.filename === entry.name)) {
        BLOG_LIST.push({
          filename: `${FETCH_FOLDER}/${entry.name}`,
          text: entry.object.text
        })
        if (TEST === 'true') {
          break
        }
      }
    } else if (entry.type === 'tree') {
      if (TEST === 'true' && BLOG_LIST.length > 0) {
        break
      }
      core.debug(`Fetching blog list for ${entry.path}...`)
      await fetchBlogList({
        GITHUB_USERNAME,
        BLOG_REPONAME,
        BLOG_PATH,
        GITHUB_TOKEN,
        TEST,
        BLOG_LIST,
        FETCH_FOLDER: entry.path
      })
    }
  }

  return BLOG_LIST
}

export default async function FetchBlogList({
  GITHUB_USERNAME,
  BLOG_REPONAME,
  BLOG_PATH,
  GITHUB_TOKEN,
  TEST
}: BlogListParameterType): Promise<BlogFileType[]> {
  try {
    const BLOG_LIST: BlogFileType[] = []

    // Fetch blog list from Github GraphQL API
    core.debug(`Fetching blog list for ${BLOG_PATH}...`)
    const blogList = await fetchBlogList({
      GITHUB_USERNAME,
      BLOG_REPONAME,
      BLOG_PATH,
      GITHUB_TOKEN,
      TEST,
      BLOG_LIST,
      FETCH_FOLDER: BLOG_PATH
    })

    core.debug(`Blog list fetched: ${blogList.length}`)

    return blogList
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }

  return []
}
