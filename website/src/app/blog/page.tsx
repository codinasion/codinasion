import type { Metadata } from "next";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import BlogComponent from "@/components/Blog/blog-component";
import { GetBlogList, GetBlogTagList } from "@/data";
import { BLOG_LIST_PER_PAGE } from "./default";

export async function generateMetadata(): Promise<Metadata> {
  const tagList = await GetBlogTagList();

  return SEO({
    title: "Blog",
    description:
      "Get latest blog posts related to programming, open source and more.",
    keywords: ["codinasion", "blog", "open source", ...tagList.slice(0, 10)],
  });
}

export default async function Page(): Promise<JSX.Element> {
  const blogListData = await GetBlogList();

  const pageNumber = 1;
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
