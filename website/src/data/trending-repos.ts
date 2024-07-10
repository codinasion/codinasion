import type { TrendingRepoType } from "@/types";

export async function GetTrandingReposData(): Promise<TrendingRepoType[]> {
  // Source: https://github.com/alisoft/github-trending-api
  const res = await fetch("https://api.gitterapp.com", {
    method: "GET",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch trending repos data");
  }

  const data = (await res.json()) as TrendingRepoType[];

  return data;
}

export async function GetTrandingReposLanguagesData(
  trendingRepos: TrendingRepoType[],
): Promise<string[]> {
  const languages: string[] = [];

  trendingRepos.forEach((repo) => {
    if (repo.language) {
      if (!languages.includes(repo.language)) {
        languages.push(repo.language);
      }
    }
  });

  return languages;
}
