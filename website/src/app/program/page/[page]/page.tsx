import { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import ProgramComponent from "@/components/Program/program-component";
import { GetProgramList, GetProgramLanguageList } from "@/data";
import { PROGRAM_LIST_PER_PAGE } from "../../default";

export async function generateMetadata(): Promise<Metadata> {
  const LanguageList = await GetProgramLanguageList();

  return SEO({
    title: "Program",
    description: "An open-source codebase for sharing programming solutions.",
    keywords: ["codinasion", "program", "open source", ...LanguageList],
  });
}

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ page: string }[]> {
  const ProgramData = await GetProgramList();
  const totalPages = Math.ceil(ProgramData.length / PROGRAM_LIST_PER_PAGE);
  const paths = Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  })).slice(0, 1);

  return paths;
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ProgramPage({
  params,
}: {
  params: { page: string };
}): Promise<JSX.Element> {
  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ProgramDataLoad = GetProgramList();
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
        basePath="/program"
      />
    </>
  );
}
