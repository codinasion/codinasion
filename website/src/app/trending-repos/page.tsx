import { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import TrendingReposComponent from "@/components/TrendingRepos/trending-repos-component";
import { GetTrandingReposData, GetTrandingReposLanguagesData } from "@/data";

export const metadata: Metadata = {
  title: "Trending Repos",
  description: "Latest trending repos on GitHub",
};

export default async function Page(): Promise<JSX.Element> {
  const TrendingReposData = await GetTrandingReposData();

  const TrendingReposLanguagesData =
    await GetTrandingReposLanguagesData(TrendingReposData);

  return (
    <>
      <PageTitle
        title="Trending Repos"
        description="Latest trending repos on GitHub"
      />

      <TrendingReposComponent
        trendingRepos={TrendingReposData}
        trendingReposLanguagesData={TrendingReposLanguagesData}
      />
    </>
  );
}
