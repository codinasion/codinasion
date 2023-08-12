import type { Metadata } from "next";

import type { ProgramListType } from "@/types";

import { GetProgramLanguageProgramList, GetProgramLanguageList } from "data";

import { Breadcrumb, Comment } from "@/shared";

import ProgramCard from "@/components/Program/ProgramCard";
import ProgramLanguageCard from "@/components/Program/ProgramLanguageCard";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { language: string };
}): Promise<Metadata> {
  const language = params.language;
  return {
    title: `${language
      .replace(/-sharp/g, "#")
      .replace(/-plus/g, "+")
      .replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )} | Language | Program`,
    description: "An open-source codebase for sharing programming solutions.",
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

export default async function ProgramLanguagePage({
  params,
}: {
  params: { language: string };
}) {
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

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Languages",
            url: "/languages",
          },
          {
            title: language
              .replace(/-sharp/g, "#")
              .replace(/-plus/g, "+")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              ),
          },
        ]}
      />

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {ProgramData?.length > 0 ? (
            ProgramData.map((program: ProgramListType) => (
              <ProgramCard
                key={program.slug}
                ProgramData={program}
                language={language}
              />
            ))
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-lg font-medium py-5">
              No programs found for {language}.
            </div>
          )}

          <Comment />
        </div>
        <div className="md:col-span-2">
          <ProgramLanguageCard languages={ProgramLanguageData} />
        </div>
      </div>
    </>
  );
}
