import * as core from "@actions/core";
import fs from "fs";
import FetchProgramData from "./fetch-program-data";
import type { ProgramListType, ProgramParameterType } from "./types";

type LanguageProgramListType = {
  language: string;
  programs: ProgramListType[];
};

export default async function CollectProgramData({
  GITHUB_USERNAME,
  PROGRAM_REPONAME,
  PROGRAM_PATH,
  PROGRAM_OUTPUT_PATH,
  GITHUB_TOKEN,
  TEST,
}: ProgramParameterType): Promise<void> {
  try {
    // Fetch program data from Github API
    const programData = await FetchProgramData({
      GITHUB_USERNAME,
      PROGRAM_REPONAME,
      PROGRAM_PATH,
      GITHUB_TOKEN,
      TEST,
    });

    // Create program data folder
    const PROGRAM_FOLDER = PROGRAM_OUTPUT_PATH;
    await fs.promises.mkdir(PROGRAM_FOLDER, { recursive: true });

    const programList: ProgramListType[] = [];
    const languagesList: string[] = [];
    const languagesProgramList: LanguageProgramListType[] = [];

    for (const program of programData) {
      const programListData = {
        slug: program.slug,
        title: program.title,
        languages: program.languages,
        contributors: program.contributors,
        lastUpdated: program.lastUpdated,
      };
      programList.push(programListData);

      // Write program data to file
      await fs.promises.writeFile(
        `${PROGRAM_FOLDER}/${program.slug}.json`,
        JSON.stringify(program, null, 2),
      );

      // Collect languages list
      for (const language of program.languages) {
        if (!languagesList.includes(language)) {
          languagesList.push(language);
        }
      }

      // Collect languages program list
      for (const language of program.languages) {
        const languageProgramList = languagesProgramList.find(
          (item: LanguageProgramListType) => item.language === language,
        );
        if (languageProgramList) {
          languageProgramList.programs.push(programListData);
        } else {
          languagesProgramList.push({
            language,
            programs: [programListData],
          });
        }
      }
    }

    // Write program list to file
    await fs.promises.writeFile(
      `${PROGRAM_FOLDER}/program.json`,
      JSON.stringify(programList, null, 2),
    );

    // Write languages list to file
    await fs.promises.writeFile(
      `${PROGRAM_FOLDER}/languages.json`,
      JSON.stringify(languagesList, null, 2),
    );

    // Create languages folder in program data folder
    const LANGUAGES_FOLDER = `${PROGRAM_FOLDER}/languages`;
    await fs.promises.mkdir(LANGUAGES_FOLDER, { recursive: true });

    // Write languages program list to file
    for (const languageData of languagesProgramList) {
      // Write language program list to file
      await fs.promises.writeFile(
        `${LANGUAGES_FOLDER}/${languageData.language.toLowerCase()}.json`,
        JSON.stringify(languageData.programs, null, 2),
      );
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
