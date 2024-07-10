import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import BlogComponent from "@/components/Blog/blog-component";
import { GetBlogTagList, GetFilteredBlogList } from "@/data";
import { ConvertToTitleCase } from "@/utils";
import { BLOG_LIST_PER_PAGE } from "../../default";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = params.tag;

  return SEO({
    title: `"${ConvertToTitleCase(tag)}" Blogs`,
    description: `Browse blog posts by tags. Here are the list of all blog tagged with "${ConvertToTitleCase(
      tag,
    )}".`,

    keywords: ["codinasion", "blog", "open source", tag],
  });
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const blogListData = await GetBlogTagList();

  return blogListData.slice(0, 1).map((tag: string) => ({
    tag: tag,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function Page({
  params,
}: {
  params: { tag: string };
}): Promise<JSX.Element> {
  const tag = params.tag;

  const blogTagListData = await GetBlogTagList();

  if (!blogTagListData.includes(tag)) {
    return notFound();
  }

  const filteredBlogListData = await GetFilteredBlogList({ tag });

  const pageNumber = 1;
  const displayBlogList = filteredBlogListData.slice(
    BLOG_LIST_PER_PAGE * (pageNumber - 1),
    BLOG_LIST_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(filteredBlogListData.length / BLOG_LIST_PER_PAGE),
  };

  return (
    <>
      <PageTitle
        title={`"${ConvertToTitleCase(tag)}" Blogs`}
        description={`Browse blog posts by tags. Here are the list of all blog tagged with "${ConvertToTitleCase(
          tag,
        )}".`}
      />

      <BlogComponent
        displayBlogList={displayBlogList}
        pagination={pagination}
        basePath={`/blog/tags/${tag}`}
      />
    </>
  );
}
