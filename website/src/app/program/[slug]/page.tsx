import type { Metadata } from "next";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import ProgramDetailComponent from "@/components/Program/program-detail-component";
import { GetProgramList, GetProgramData } from "@/data";
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

  return SEO({
    title,
    description,

    keywords: ["codinasion", "program", "open source"].concat(
      programData.languages.map((language) => language),
    ),
  });
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
      <Breadcrumb
        paths={[
          { title: "Home", href: "/" },
          { title: "Program", href: "/program" },
          { title: programData.title },
        ]}
      />

      <ProgramDetailComponent programData={programData} />
    </>
  );
}
