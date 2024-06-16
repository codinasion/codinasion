import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import BlogDetailComponent from "@/components/Blog/blog-detail-component";
import { GetBlogData, GetBlogList } from "@/data";
import type { BlogDataType, BlogListType } from "@/types";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const slug = params.slug;
  const slug_string = slug.join("/");

  const blogData = await GetBlogData({ slug: slug_string });

  return SEO({
    title: blogData.title,
    description: blogData.description,

    keywords: ["codinasion", "blog", "open source", ...blogData.tags],
    image: blogData.image,
  });
}
// End of metadata generation
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const blogListData = await GetBlogList();

  return blogListData.slice(0, 1).map((blog: BlogListType) => ({
    slug: blog.slug.split("/"),
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug;
  const slug_string = slug.join("/");

  const blogListData = await GetBlogList();

  const findBlog = blogListData.find(
    (blog: BlogListType) => blog.slug === slug_string,
  );

  if (!findBlog) {
    return notFound();
  }

  const blogData: BlogDataType = await GetBlogData({ slug: slug_string });

  return (
    <>
      <Breadcrumb
        paths={[
          { title: "Home", href: "/" },
          { title: "Blog", href: "/blog" },
          { title: slug_string.replace(/\//g, " / ") },
        ]}
      />

      <BlogDetailComponent blogData={blogData} />
    </>
  );
}
