import { Metadata } from "next";
import { KebabCaseStringToTitleCaseString } from "codinasion";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import ToolsComponent from "@/components/Tools/tools-component";
import { GetToolsDataByTag, GetToolsTagsData } from "@/data";
import { TOOLS_LIST_PER_PAGE } from "../../../../default";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = params.tag;

  const title = `${KebabCaseStringToTitleCaseString(tag)} | Tools`;
  const description = "A collection of useful online tools.";

  return SEO({
    title,
    description,

    keywords: ["codinasion", "tools", "online tools", "open source", tag],
  });
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<
  { tag: string; page: string }[]
> {
  const tagList = await GetToolsTagsData();
  const paths = tagList.slice(0, 1).flatMap((tag) => {
    return Array.from({ length: 1 }, (_, i) => ({
      tag: tag,
      page: (i + 2).toString(), // start from 1 instead of 0
    }));
  });
  return paths.slice(0, 1);
}
// End of static generation

export default async function Page({
  params,
}: {
  params: { tag: string; page: string };
}): Promise<JSX.Element> {
  const tag = params.tag;

  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ToolsDataLoad = GetToolsDataByTag(tag);
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
        tag={tag}
        toolsTagsListData={ToolsTagsData}
        displayToolsList={displayToolsList}
        pagination={pagination}
        basePath={`/tools/tags/${tag}`}
      />
    </>
  );
}
