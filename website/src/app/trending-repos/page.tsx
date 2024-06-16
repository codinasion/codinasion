import { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import TrendingReposComponent from "@/components/TrendingRepos/trending-repos-component";
import { GetTrandingReposData, GetTrandingReposLanguagesData } from "@/data";

export async function generateMetadata(): Promise<Metadata> {
  const TrendingReposData = await GetTrandingReposData();

  const TrendingReposLanguagesData =
    await GetTrandingReposLanguagesData(TrendingReposData);

  return SEO({
    title: "Trending Repos",
    description: "Latest trending repos on GitHub",
    keywords: [
      "codinasion",
      "trending repos",
      "open source",
      ...TrendingReposLanguagesData,
    ],
  });
}

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
