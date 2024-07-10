import * as core from '@actions/core'
import fs from 'fs'
import CreateIssue from './create-issue'
import type { ProgramDataType, LanguageDataType, BasePropsType } from './types'

export default async function AutoCreateIssue({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN
}: BasePropsType): Promise<void> {
  try {
    const programDataFolderPath = 'program/data'
    if (!fs.existsSync(programDataFolderPath)) {
      core.info(`No program data folder found at ${programDataFolderPath}`)
      return
    }

    const programDataFilePath = `${programDataFolderPath}/programs.json`
    if (!fs.existsSync(programDataFilePath)) {
      core.info(`No program data file found at ${programDataFilePath}`)
      return
    }

    const languagesDataFilePath = `${programDataFolderPath}/languages.json`
    if (!fs.existsSync(languagesDataFilePath)) {
      core.info(`No languages data file found at ${languagesDataFilePath}`)
      return
    }

    // Read program data
    const programData: ProgramDataType[] = JSON.parse(
      fs.readFileSync(programDataFilePath, 'utf8')
    )

    // Read languages data
    const languagesData: LanguageDataType[] = JSON.parse(
      fs.readFileSync(languagesDataFilePath, 'utf8')
    )

    // Filter not created programs
    const filteredProgramData = programData.filter(
      (program: { created: boolean }) => program.created === false
    )
    core.debug(`Filtered program data: ${JSON.stringify(filteredProgramData)}`)

    // Select a random program from filtered program data
    const randomProgramData =
      filteredProgramData[
        Math.floor(Math.random() * filteredProgramData.length)
      ]
    core.debug(`Random program data: ${JSON.stringify(randomProgramData)}`)

    // Generate Issue data
    const ISSUE_TITLE = randomProgramData.title.trim()

    const TRACK_ISSUE_TITLE = `Write a program to ${ISSUE_TITLE.toLowerCase()}`

    let ISSUE_BODY = `### Description

${randomProgramData.description.trim()}
`

    // Credit contributor
    if (randomProgramData.contributor !== 'harshraj8843') {
      ISSUE_BODY += `
<sub>Contributed by - @${randomProgramData.contributor}</sub>
`
    }

    // Add tracking issues
    ISSUE_BODY += `

<!-- Tracking Issues -->

\`\`\`[tasklist]
### Tracking Issues
`
    for (const language of languagesData) {
      const track = TRACK_ISSUE_TITLE.replace(
        'Write a ',
        `Write a ${language.name} `
      )
      ISSUE_BODY += `- [ ] ${track}
`
    }
    ISSUE_BODY += `\`\`\``
    core.debug(`Issue body: ${ISSUE_BODY}`)

    // Create tracking issue
    const ISSUE_NUMBER = await CreateIssue({
      GITHUB_USERNAME,
      GITHUB_REPONAME,
      GITHUB_TOKEN,
      ISSUE_TITLE,
      ISSUE_BODY,
      ISSUE_LABELS: ['auto-track']
    })

    // Update program data
    const updatedProgramData = programData.map((program: ProgramDataType) => {
      if (program.title === randomProgramData.title) {
        return {
          ...program,
          created: true,
          publishedAt: new Date().toISOString()
        }
      }

      return program
    })
    core.debug(`Updated program data: ${JSON.stringify(updatedProgramData)}`)

    // Write updated program data to file
    fs.writeFileSync(
      programDataFilePath,
      JSON.stringify(updatedProgramData, null, 2)
    )

    // Create README.md for respective program
    const programReadmeFolderPath = `program/program/${ISSUE_TITLE.toLowerCase().replace(
      / /g,
      '-'
    )}`
    if (!fs.existsSync(programReadmeFolderPath)) {
      fs.mkdirSync(programReadmeFolderPath, { recursive: true })
    }

    const programReadmeFilePath = `${programReadmeFolderPath}/README.md`
    core.debug(`Program README file path: ${programReadmeFilePath}`)

    const programReadmeFileContent = `---
title: ${ISSUE_TITLE}
trackId: ${ISSUE_NUMBER}
---

## ${randomProgramData.description.trim()}

---
`
    core.debug(`Program README file content: ${programReadmeFileContent}`)

    // Write program README file
    fs.writeFileSync(programReadmeFilePath, programReadmeFileContent)

    // Set output
    core.setOutput('issue-number', ISSUE_NUMBER)
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
