import Hero from "./_hero";
import ContributorsSection from "@/components/Contributors/contributors-section";
import { GetContributorsList } from "@/data";

export default async function Page(): Promise<JSX.Element> {
  const contributors = await GetContributorsList();

  return (
    <>
      <Hero />

      <div className="mt-20">
        <ContributorsSection
          contributors={contributors}
          previewOnly={true}
          shuffleContributors={true}
        />
      </div>
    </>
  );
}
