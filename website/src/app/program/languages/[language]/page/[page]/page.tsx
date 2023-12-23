import { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import ProgramComponent from "@/components/Program/program-component";
import { GetProgramLanguageProgramList, GetProgramLanguageList } from "@/data";
import { PROGRAM_LIST_PER_PAGE } from "../../../../default";

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

  return SEO({
    title,
    description,

    keywords: ["codinasion", "program", "open source", language],
  });
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<
  { language: string; page: string }[]
> {
  const languageList = await GetProgramLanguageList();
  const paths = languageList.slice(0, 1).flatMap((language) => {
    return Array.from({ length: 1 }, (_, i) => ({
      language: language,
      page: (i + 2).toString(), // start from 1 instead of 0
    })).slice(0, 1);
  });
  return paths;
}
// End of static generation

export default async function ProgramPage({
  params,
}: {
  params: { language: string; page: string };
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

  const pageNumber = parseInt(params.page as string);
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
