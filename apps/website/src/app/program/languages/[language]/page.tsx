import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ProgramComponent from "@/components/Program/program-component";
import {
  SiteMetadata,
  GetProgramLanguageProgramList,
  GetProgramLanguageList,
} from "@/data";
import { PROGRAM_LIST_PER_PAGE } from "../../default";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { language: string };
}): Promise<Metadata> {
  const language = params.language;

  const title = `${language
    .replace(/-sharp/g, "#")
    .replace(/-plus/g, "+")
    .replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase()),
    )} | Program`;
  const description =
    "An open-source codebase for sharing programming solutions.";

  return {
    title,
    description,

    keywords: ["codinasion", "program", "open source", language],

    openGraph: {
      title,
      description,
      url: `${SiteMetadata.site_url}/program/languages/${language}`,
      siteName: SiteMetadata.title,
      images: [
        // TODO: Add og:image for program language page
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      siteId: SiteMetadata.twitter_userid,
      creator: `@${SiteMetadata.twitter_username}`,
      creatorId: SiteMetadata.twitter_userid,
      images: [
        // TODO: Add twitter:image for program language page
      ],
    },
  };
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const ProgramLanguageData = await GetProgramLanguageList();

  return ProgramLanguageData.slice(0, 1).map((language: string) => ({
    language: language,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ProgramPage({
  params,
}: {
  params: { language: string };
}): Promise<JSX.Element> {
  const language = params.language;

  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ProgramDataLoad = GetProgramLanguageProgramList(language);
  const ProgramLanguageDataLoad = GetProgramLanguageList();

  // Wait for the promises to resolve
  const [ProgramData, ProgramLanguageData] = await Promise.all([
    ProgramDataLoad,
    ProgramLanguageDataLoad,
  ]);
  /////////////////////////////////////////////////////////////////////////////

  const pageNumber = 1;
  const displayProgramList = ProgramData.slice(
    PROGRAM_LIST_PER_PAGE * (pageNumber - 1),
    PROGRAM_LIST_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(ProgramData.length / PROGRAM_LIST_PER_PAGE),
  };

  return (
    <>
      <PageTitle
        title="Program"
        description="An open-source codebase for sharing programming solutions."
      />

      <ProgramComponent
        programLanguageListData={ProgramLanguageData}
        displayProgramList={displayProgramList}
        pagination={pagination}
        basePath={`/program/languages/${language}`}
      />
    </>
  );
}
