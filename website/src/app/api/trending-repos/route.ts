import { GetTrandingReposData } from "@/data";

export const revalidate = 3600;

export async function GET() {
  // Source: https://github.com/alisoft/github-trending-api
  const TrendingRepos = await GetTrandingReposData();

  return Response.json(TrendingRepos);
}
