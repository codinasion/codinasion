import * as core from '@actions/core'
import matter from 'gray-matter'
import FetchBlogList from './fetch-blog-list'
import type { BlogDataType, BlogDataParameterType } from './types'

type BlogDataResponseType = BlogDataType

export default async function FetchBlogData({
  GITHUB_USERNAME,
  BLOG_REPONAME,
  BLOG_PATH,
  GITHUB_TOKEN,
  TEST
}: BlogDataParameterType): Promise<BlogDataResponseType[]> {
  try {
    // Fetch blog list from Github GraphQL API
    const blogList = await FetchBlogList({
      GITHUB_USERNAME,
      BLOG_REPONAME,
      BLOG_PATH,
      GITHUB_TOKEN,
      TEST
    })

    const blogDataList: BlogDataResponseType[] = []

    for (const blog of blogList) {
      const matterResult = matter(blog.text)

      blogDataList.push({
        slug: blog.filename.replace('.md', '').replace('content/blog/', ''),
        image: matterResult.data.image ? matterResult.data.image : undefined,
        title: matterResult.data.title,
        description: matterResult.data.description,
        tags: matterResult.data.tags,
        date: new Date(matterResult.data.date),
        markdown: matterResult.content
      })

      if (TEST === 'true') {
        break
      }
    }

    core.debug(`Total ${blogDataList.length} blogs fetched`)

    // Sort blog data list by date
    blogDataList.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0
    })

    return blogDataList
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
  return []
}
