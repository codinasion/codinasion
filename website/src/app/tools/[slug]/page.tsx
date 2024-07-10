import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KebabCaseStringToTitleCaseString } from "codinasion";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import ToolLoader from "@/components/Tools/tool-loader";
import Comment from "@/components/Comment";
import SponsorCard from "@/components/Sponsors/sponsor-card";
import { GetToolsData, GetToolContentData } from "@/data";
import { ToolDataType } from "@/types";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const toolsListData: ToolDataType[] = await GetToolsData();

  const toolData = toolsListData.find((tool) => tool.name === slug);

  const title = `${KebabCaseStringToTitleCaseString(slug)} | Tools`;
  const description = `An online tool for ${KebabCaseStringToTitleCaseString(
    slug,
  )}`;

  return SEO({
    title,
    description,

    keywords: [
      "codinasion",
      "tools",
      "online tools",
      "open source",
      ...(toolData?.tags ?? []),
    ],
  });
}
// End of metadata generation
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const toolsListData = await GetToolsData();

  return toolsListData.slice(0, 1).map((tool: ToolDataType) => ({
    slug: tool.name,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ToolsSlugPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const slug = params.slug;

  const toolsData = GetToolsData();

  if (!toolsData.some((tool) => tool.name === slug)) {
    notFound();
  }

  const toolContentData = await GetToolContentData(slug);

  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div className="w-full">
        <Breadcrumb
          paths={[
            { title: "Home", href: "/" },
            { title: "Tools", href: "/tools" },
            { title: KebabCaseStringToTitleCaseString(slug) },
          ]}
        />

        <ToolLoader slug={slug} toolContentData={toolContentData} />

        <Comment />
      </div>

      <div className="space-y-5 min-w-[320px]">
        <div className="md:mt-24">
          <SponsorCard />
        </div>
      </div>
    </div>
  );
}
