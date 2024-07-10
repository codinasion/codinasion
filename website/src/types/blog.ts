type BlogListType = {
  slug: string;
  image?: string;
  title: string;
  description: string;
  tags: string[];
  date: Date;
};

type BlogDataType = BlogListType & {
  markdown: string;
};

export type { BlogListType, BlogDataType };
