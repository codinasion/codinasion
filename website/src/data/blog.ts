import type { BlogListType, BlogDataType } from "@/types";

export async function GetBlogList(): Promise<BlogListType[]> {
  const response = await fetch(`${process.env.BLOG_DATA_URL ?? ""}/blog.json`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  } as RequestInit);

  if (!response.ok) {
    throw new Error("Failed to fetch blog list");
  }

  return (await response.json()) as BlogListType[];
}

export async function GetBlogData({
  slug,
}: {
  slug: string;
}): Promise<BlogDataType> {
  const response = await fetch(
    `${process.env.BLOG_DATA_URL ?? ""}/${slug}.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    } as RequestInit,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return (await response.json()) as BlogDataType;
}

export async function GetBlogTagList(): Promise<string[]> {
  const response = await fetch(`${process.env.BLOG_DATA_URL ?? ""}/tags.json`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  } as RequestInit);

  if (!response.ok) {
    throw new Error("Failed to fetch blog tag list");
  }

  return (await response.json()) as string[];
}

export async function GetFilteredBlogList({
  tag,
}: {
  tag: string;
}): Promise<BlogListType[]> {
  const response = await fetch(
    `${process.env.BLOG_DATA_URL ?? ""}/tags/${tag}.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    } as RequestInit,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch filtered blog list");
  }

  return (await response.json()) as BlogListType[];
}
