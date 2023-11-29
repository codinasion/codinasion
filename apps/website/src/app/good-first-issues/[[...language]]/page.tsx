import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import GoodFirstIssuesComponent from "@/components/GoodFirstIssues/good-first-issues-component";
import {
  SiteMetadata,
  GetGoodFirstIssue,
  GetGoodFirstIssueLabelsData,
  LanguageList,
} from "@/data";
import {
  EncodeURL as EncodeLanguage,
  DecodeURL as DecodeLanguage,
  ConvertToTitleCase,
  ConvertKebabCaseToTitleCase,
} from "@/utils";

const GOOD_FIRST_ISSUES_PER_PAGE = 25;

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export function generateMetadata({
  params,
}: {
  params: { language?: string[] };
}): Metadata {
  const language = params.language?.[0] ?? null;

  const title = language
    ? `${ConvertKebabCaseToTitleCase(language)} | Good First Issues`
    : "Good First Issues";
  const description = language
    ? `Good First Issues for ${DecodeLanguage(
        language,
      )}. A 'good first issue' in open source refers to a task or problem that is suitable for someone who is new to the project or open source development in general. These issues are usually relatively simple and well-defined, making them a great starting point for newcomers to get involved in open source projects. They are designed to provide a low barrier to entry, allowing beginners to learn about the project's codebase, development processes, and tools while making a meaningful contribution. Good first issues often come with clear instructions, documentation, and support from the project's community, making it easier for newcomers to get started and gain confidence in contributing to open source.`
    : "A 'good first issue' in open source refers to a task or problem that is suitable for someone who is new to the project or open source development in general. These issues are usually relatively simple and well-defined, making them a great starting point for newcomers to get involved in open source projects. They are designed to provide a low barrier to entry, allowing beginners to learn about the project's codebase, development processes, and tools while making a meaningful contribution. Good first issues often come with clear instructions, documentation, and support from the project's community, making it easier for newcomers to get started and gain confidence in contributing to open source.";

  return {
    title,
    description,

    keywords: ["codinasion", "good first issues", "open source"],

    openGraph: {
      title,
      description,
      url: `${SiteMetadata.site_url}/good-first-issues/${language ?? ""}`,
      siteName: SiteMetadata.title,
      images: [
        // TODO: Add og:image for good first issues page
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
        // TODO: Add twitter:image for good first issues page
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
export function generateStaticParams(): { language: string[] }[] {
  return LanguageList.slice(0, 1).map((language) => ({
    language: [EncodeLanguage(language)],
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function GoodFirstIssuesPage({
  params,
}: {
  params: { language?: string[] };
}): Promise<JSX.Element> {
  const language = params.language?.[0] ?? null;

  if (language && !LanguageList.includes(DecodeLanguage(language))) {
    notFound();
  }

  const goodFirstIssues = await GetGoodFirstIssue({
    language: language ? DecodeLanguage(language) : null,
  });

  const goodFirstIssueLabelsData =
    await GetGoodFirstIssueLabelsData(goodFirstIssues);

  return (
    <>
      <PageTitle
        title="Good First Issues"
        description={`Find latest ${
          language ? `"${ConvertToTitleCase(DecodeLanguage(language))}" ` : ""
        }good first issues from open source projects on GitHub.`}
      />

      <GoodFirstIssuesComponent
        language={language}
        goodFirstIssues={goodFirstIssues}
        goodFirstIssueLabelsData={goodFirstIssueLabelsData}
        goodFirstIssuesPerPage={GOOD_FIRST_ISSUES_PER_PAGE}
      />
    </>
  );
}
