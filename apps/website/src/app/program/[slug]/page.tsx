import type { Metadata } from "next";
import ProgramDetailComponent from "@/components/Program/program-detail-component";
import { SiteMetadata, GetProgramList, GetProgramData } from "@/data";
import type { ProgramDataType, ProgramListType } from "@/types";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const programData: ProgramDataType = await GetProgramData(slug);

  const title = programData.title;
  const description = programData.description;

  return {
    title,
    description,

    keywords: ["codinasion", "program", "open source"].concat(
      programData.languages.map((language) => language),
    ),

    openGraph: {
      title,
      description,
      url: `${SiteMetadata.site_url}/program/${slug}`,
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
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const ProgramData = await GetProgramList();

  return ProgramData.slice(0, 1).map((program: ProgramListType) => ({
    slug: program.slug,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const slug = params.slug;

  const programData: ProgramDataType = await GetProgramData(slug);

  return (
    <>
      <ProgramDetailComponent programData={programData} />
    </>
  );
}
