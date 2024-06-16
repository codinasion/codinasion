import { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import ToolsComponent from "@/components/Tools/tools-component";
import { GetToolsData, GetToolsTagsData } from "@/data";
import { TOOLS_LIST_PER_PAGE } from "../../default";

export async function generateMetadata(): Promise<Metadata> {
  const TagsList = await GetToolsTagsData();

  return SEO({
    title: "Tools",
    description: "A collection of useful online tools.",
    keywords: [
      "codinasion",
      "tools",
      "online tools",
      "open source",
      ...TagsList,
    ],
  });
}

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ page: string }[]> {
  const ToolsListData = await GetToolsData();
  const totalPages = Math.ceil(ToolsListData.length / TOOLS_LIST_PER_PAGE);
  const paths = Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: (i + 2).toString(),
  }));

  return paths.slice(0, 1);
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function Page({
  params,
}: {
  params: { page: string };
}): Promise<JSX.Element> {
  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ToolsDataLoad = GetToolsData();
  const ToolsTagsDataLoad = GetToolsTagsData();

  // Wait for the promises to resolve
  const [ToolsData, ToolsTagsData] = await Promise.all([
    ToolsDataLoad,
    ToolsTagsDataLoad,
  ]);
  /////////////////////////////////////////////////////////////////////////////

  const pageNumber = parseInt(params.page as string);
  const displayToolsList = ToolsData.slice(
    TOOLS_LIST_PER_PAGE * (pageNumber - 1),
    TOOLS_LIST_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(ToolsData.length / TOOLS_LIST_PER_PAGE),
  };

  return (
    <>
      <PageTitle
        title="Tools"
        description="A collection of useful online tools."
      />

      <ToolsComponent
        tag={null}
        toolsTagsListData={ToolsTagsData}
        displayToolsList={displayToolsList}
        pagination={pagination}
        basePath="/tools"
      />
    </>
  );
}
