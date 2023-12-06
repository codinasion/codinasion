import type { Metadata } from "next";
import ContributorsSection from "@/components/Contributors/contributors-section";
import { GetContributorsList } from "@/data";

export const metadata: Metadata = {
  title: "Contributors",
  description: "A list of all the contributors to the website and the project.",
};

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
