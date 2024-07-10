import * as core from '@actions/core'
import fetch from 'node-fetch'
import matter from 'gray-matter'
import { GetLanguageData } from 'codinasion'
import { wait } from '../wait'
import FetchProgramList from './fetch-program-list'
import type { Response } from 'node-fetch'
import type { ProgramDataType, ProgramDataParameterType } from './types'
import type { GithubUserType } from '../contributors/types'

type ProgramDataResponseType = ProgramDataType

interface ProgramSampleDataType {
  [key: string]: string | string[] | number
}

interface CommitAuthor {
  date: string
}

interface Commit {
  author: CommitAuthor
}

interface CommitResponse {
  commit: Commit
}

function KebabCaseStringToSentenceCaseString(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// TODO: Refactor this function (Complex Method Error)
export default async function FetchProgramData({
  GITHUB_USERNAME,
  PROGRAM_REPONAME,
  PROGRAM_PATH,
  GITHUB_TOKEN,
  TEST
}: ProgramDataParameterType): Promise<ProgramDataResponseType[]> {
  try {
    // Fetch program list from Github GraphQL API
    const programList = await FetchProgramList({
      GITHUB_USERNAME,
      PROGRAM_REPONAME,
      PROGRAM_PATH,
      GITHUB_TOKEN,
      TEST
    })

    const programDataList: ProgramDataResponseType[] = []

    for (const program of programList) {
      // Fetch program data files from Github API
      core.debug(`Fetching program data for ${program}...`)
      const query = `{
        repository(owner: "${GITHUB_USERNAME}", name: "${PROGRAM_REPONAME}") {
          object(expression: "HEAD:${PROGRAM_PATH}${program}/") {
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
        throw new Error(`Failed to fetch program list: ${response.statusText}`)
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

      const programFileList: {
        filename: string
        text: string
      }[] = []

      for (const entry of entries) {
        programFileList.push({
          filename: entry.name,
          text: entry.object.text
        })
      }

      core.debug(`Total ${programFileList.length} files fetched`)

      const programData: ProgramSampleDataType = {}
      const programDataLanguages: string[] = []

      programData['slug'] = program
      programData['title'] = KebabCaseStringToSentenceCaseString(program)

      for (const file of programFileList) {
        if (file.filename === 'README.md') {
          // Process README.md text
          const matterResult = matter(file.text)

          programData['description'] = matterResult.content
          programData['trackId'] = matterResult.data.trackId

          // Fetch last updated date
          let lastUpdatedResponse: Response
          if (GITHUB_TOKEN !== '') {
            lastUpdatedResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${PROGRAM_REPONAME}/commits?path=program/program/${program}&per_page=1`,
              {
                headers: {
                  Authorization: `token ${GITHUB_TOKEN}`
                }
              }
            )
          } else {
            lastUpdatedResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${PROGRAM_REPONAME}/commits?path=program/program/${program}&per_page=1`
            )
          }

          if (lastUpdatedResponse.status !== 200) {
            core.debug(`Failed to fetch last updated date for ${program}`)
            continue
          }

          const lastUpdatedResponseJson =
            (await lastUpdatedResponse.json()) as CommitResponse[]
          const last_updated = lastUpdatedResponseJson[0].commit.author.date

          programData['lastUpdated'] = last_updated

          // Get contributors for the program
          const response1: Response = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${PROGRAM_REPONAME}/commits?path=program/program/${program}`,
            {
              method: 'GET',
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`
              }
            }
          )

          if (!response1.ok) {
            throw new Error(
              `Failed to fetch contributors for program: ${program}`
            )
          }

          const commits: { author: GithubUserType }[] =
            await (response1.json() as Promise<{ author: GithubUserType }[]>)

          try {
            // Get contributors for the program from program
            const response2: Response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/program/commits?path=program/${program}`,
              {
                method: 'GET',
                headers: {
                  Authorization: `token ${GITHUB_TOKEN}`
                }
              }
            )

            if (!response2.ok) {
              throw new Error(
                `Failed to fetch contributors for program: ${program}`
              )
            }

            // extend commits
            commits.push(
              ...((await response2.json()) as { author: GithubUserType }[])
            )
          } catch (error) {
            core.warning(
              `Failed to fetch contributors from program for program: ${program}`
            )
          }

          const contributors: string[] = []

          for (const commit of commits) {
            if (commit.author && commit.author.id && commit.author.login) {
              if (
                !contributors.find(
                  contributor => contributor === commit.author.login
                )
              ) {
                contributors.push(commit.author.login)
              }
            } else {
              core.warning(
                `Author is not provided for commit: ${JSON.stringify(commit)}`
              )
            }
          }

          core.debug(`Contributors Length: ${contributors.length}`)

          programData['contributors'] = contributors
        } else {
          const languageName = GetLanguageData({
            fileExtension: file.filename.split('.').pop() as string
          })[0].name

          const languageKey = languageName
            .replace(/#/g, '-sharp')
            .replace(/\+/g, '-plus')
            .toLowerCase()

          if (!programDataLanguages.includes(languageKey)) {
            programDataLanguages.push(languageKey)
          }

          programData[languageKey] = file.text
        }
      }

      programData['languages'] = programDataLanguages

      programDataList.push(programData as ProgramDataResponseType)

      if (TEST === 'true') {
        break
      }

      await wait(5000)
    }

    core.debug(`Total ${programDataList.length} programs fetched`)

    return programDataList
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
  return []
}
