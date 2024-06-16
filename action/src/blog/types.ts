type BlogFileType = {
  filename: string
  text: string
}

type BlogListType = {
  slug: string
  image?: string
  title: string
  description: string
  tags: string[]
  date: Date
}

type BlogDataType = BlogListType & {
  markdown: string
}

type BlogListParameterType = {
  GITHUB_USERNAME: string
  BLOG_REPONAME: string
  BLOG_PATH: string
  GITHUB_TOKEN: string
  TEST: string
}

type BlogDataParameterType = BlogListParameterType

type BlogParameterType = BlogDataParameterType & {
  BLOG_OUTPUT_PATH: string
}

export type {
  BlogFileType,
  BlogListType,
  BlogDataType,
  BlogListParameterType,
  BlogDataParameterType,
  BlogParameterType
}
