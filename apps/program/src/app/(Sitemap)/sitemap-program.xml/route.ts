import { getServerSideSitemapIndex } from "next-sitemap";

import { GetProgramList } from "data";

import type { ProgramListType } from "@/types";

const DOMAIN = "https://program.codinasion.org";

export async function GET(request: Request) {
  const paths: string[] = [];
  const programs = await GetProgramList();

  programs.forEach((program: ProgramListType) => {
    paths.push(`${DOMAIN}/${program.slug}`);
  });

  return getServerSideSitemapIndex(paths);
}
