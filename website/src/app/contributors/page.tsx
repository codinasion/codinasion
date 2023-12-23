import type { Metadata } from "next";
import SEO from "@/components/SEO";
import ContributorsSection from "@/components/Contributors/contributors-section";
import { GetContributorsList } from "@/data";

export async function generateMetadata(): Promise<Metadata> {
  return SEO({
    title: "Contributors",
    description:
      "A list of all the contributors to the website and the project.",
    keywords: ["codinasion", "contributors", "open source", "community"],
  });
}

export default async function Page(): Promise<JSX.Element> {
  const contributors = await GetContributorsList();

  return (
    <div className="relative px-6 lg:px-8">
      <ContributorsSection
        contributors={contributors}
        previewOnly={false}
        shuffleContributors={false}
      />
    </div>
  );
}
