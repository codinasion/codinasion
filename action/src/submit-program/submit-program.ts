/**
 * Purpose: Aceept the program from the user and add it to the list of programs
 */

import * as core from '@actions/core'
import fs from 'fs'
import CreateIssueComment from './create-issue-comment'
import CloseIssue from './close-issue'
import type { ProgramDataType, SubmitProgramPropsType } from './types'

export default async function SubmitProgram({
  GITHUB_USERNAME,
  GITHUB_REPONAME,
  GITHUB_TOKEN,
  SUBMIT_PROGRAM_USERNAME,
  SUBMIT_PROGRAM_ISSUE_NUMBER,
  SUBMIT_PROGRAM_TITLE,
  SUBMIT_PROGRAM_BODY
}: SubmitProgramPropsType): Promise<void> {
  try {
    // Debug the inputs
    core.debug(`Issue Author: ${SUBMIT_PROGRAM_USERNAME}`)
    core.debug(`Issue Number: ${SUBMIT_PROGRAM_ISSUE_NUMBER}`)
    core.debug(`Title: ${SUBMIT_PROGRAM_TITLE}`)
    core.debug(`Body: ${SUBMIT_PROGRAM_BODY}`)

    // Modify issue body
    const MODIFIED_ISSUE_BODY = `Write a program to ${SUBMIT_PROGRAM_TITLE.toLowerCase()}

${SUBMIT_PROGRAM_BODY.replace('### Description', '').trim()}
    `
    core.debug(`Modified Body: ${MODIFIED_ISSUE_BODY}`)

    // Create new program data
    const newProgramData: ProgramDataType = {
      title: SUBMIT_PROGRAM_TITLE,
      description: MODIFIED_ISSUE_BODY,
      contributor: SUBMIT_PROGRAM_USERNAME,
      createdAt: new Date().toISOString(),
      createdIssueNumber: SUBMIT_PROGRAM_ISSUE_NUMBER,
      publishedAt: '',
      created: false
    }
    core.debug(`New Program Data: ${JSON.stringify(newProgramData)}`)

    // Get previous program data
    const programDataFolderPath = 'program/data'
    // Check if the folder exists
    if (!fs.existsSync(programDataFolderPath)) {
      // Create the folder
      fs.mkdirSync(programDataFolderPath)
    }

    // Check if the file exists
    const programDataFilePath = `${programDataFolderPath}/programs.json`
    if (!fs.existsSync(programDataFilePath)) {
      // Create the file
      fs.writeFileSync(programDataFilePath, '[]')
    }

    // Read the file
    const previousProgramData = JSON.parse(
      fs.readFileSync(programDataFilePath, 'utf8')
    )
    core.debug(`Previous Program Data: ${JSON.stringify(previousProgramData)}`)

    // Check if the program already exists
    const programExists = previousProgramData.find(
      (program: ProgramDataType) => program.title === SUBMIT_PROGRAM_TITLE
    )
    // If the program already exists
    if (programExists) {
      core.debug('Program already exists !!!')

      // Create a comment on the issue
      await CreateIssueComment({
        GITHUB_USERNAME,
        GITHUB_REPONAME,
        GITHUB_TOKEN,
        ISSUE_NUMBER: SUBMIT_PROGRAM_ISSUE_NUMBER,
        COMMENT_BODY: `Hey @${SUBMIT_PROGRAM_USERNAME}

It seems that this program already been submitted.

Please check the list of programs here: https://github.com/${GITHUB_USERNAME}/${GITHUB_REPONAME}/blob/master/program/data/programs.json

Thanks for your contribution :hugs:`
      })

      // Close the issue
      await CloseIssue({
        GITHUB_USERNAME,
        GITHUB_REPONAME,
        GITHUB_TOKEN,
        ISSUE_NUMBER: SUBMIT_PROGRAM_ISSUE_NUMBER,
        CLOSING_LABELS: ['submit-program', 'duplicate']
      })

      // Set output as failure
      core.setFailed('Program already exists !!!')

      // Stop the execution
      return
    }

    // Add the new program data to the previous program data
    previousProgramData.push(newProgramData)
    // Sort the programs by title
    previousProgramData.sort((a: ProgramDataType, b: ProgramDataType) =>
      a.title.localeCompare(b.title)
    )
    core.debug(`New Program Data: ${JSON.stringify(previousProgramData)}`)

    // Write the new program data to the file
    fs.writeFileSync(
      programDataFilePath,
      JSON.stringify(previousProgramData, null, 2)
    )

    // Set output as success
    core.setOutput('submit-success', 'true')
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
