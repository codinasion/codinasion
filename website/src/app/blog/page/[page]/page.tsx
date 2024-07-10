import type { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import BlogComponent from "@/components/Blog/blog-component";
import { GetBlogList, GetBlogTagList } from "@/data";
import { BLOG_LIST_PER_PAGE } from "../../default";

export async function generateMetadata(): Promise<Metadata> {
  const tagList = await GetBlogTagList();

  return SEO({
    title: "Blog",
    description:
      "Get latest blog posts related to programming, open source and more.",
    keywords: ["codinasion", "blog", "open source", ...tagList.slice(0, 10)],
  });
}

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ page: string }[]> {
  const blogListData = await GetBlogList();
  const totalPages = Math.ceil(blogListData.length / BLOG_LIST_PER_PAGE);
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
  const blogListData = await GetBlogList();

  const pageNumber = parseInt(params.page as string);
  const displayBlogList = blogListData.slice(
    BLOG_LIST_PER_PAGE * (pageNumber - 1),
    BLOG_LIST_PER_PAGE * pageNumber,
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(blogListData.length / BLOG_LIST_PER_PAGE),
  };

  return (
    <>
      <PageTitle
        title="Blog"
        description="Get latest blog posts related to programming, open source and more."
      />

      <BlogComponent
        displayBlogList={displayBlogList}
        pagination={pagination}
        basePath="/blog"
      />
    </>
  );
}
