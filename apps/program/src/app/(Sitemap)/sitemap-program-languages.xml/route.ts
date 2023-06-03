import { getServerSideSitemapIndex } from "next-sitemap";

import { GetProgramLanguageList, GetProgramLanguageProgramList } from "data";

import type { ProgramListType } from "@/types";

const DOMAIN = "https://program.codinasion.org";

export async function GET(request: Request) {
  const paths: string[] = [];
  const languages: string[] = await GetProgramLanguageList();

  for (const language of languages) {
    paths.push(`${DOMAIN}/languages/${language}`);

    const programs = await GetProgramLanguageProgramList(language);

    programs.forEach((program: ProgramListType) => {
      paths.push(`${DOMAIN}/languages/${language}/${program.slug}`);
    });
  }

  return getServerSideSitemapIndex(paths);
}
