import type { Metadata } from "next";
import SEO from "@/components/SEO";
import Link from "@/components/Link";
import { GetBlogTagList } from "@/data";
import { ConvertToKebabCase } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
  const tags = await GetBlogTagList();

  return SEO({
    title: "Blog Tags",
    description:
      "Browse blog posts by tags. Here are the list of all blog tags.",
    keywords: ["blog", "open source", ...tags.slice(0, 10)],
  });
}

export default async function Page() {
  const tagListData = await GetBlogTagList();

  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Blog Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tagListData.length === 0 && "No tags found."}
          {tagListData.map((tag) => {
            return (
              <div key={tag} className="mb-2 mr-5 mt-2">
                <Link
                  href={`/blog/tags/${ConvertToKebabCase(tag)}`}
                  className="mr-3 text-sm font-medium uppercase link link-hover"
                >
                  {tag}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
