import * as core from '@actions/core'
import fs from 'fs'
import FetchBlogData from './fetch-blog-data'
import type { BlogListType, BlogParameterType } from './types'

type TagBlogListType = {
  tag: string
  blogs: BlogListType[]
}

export default async function CollectBlogData({
  GITHUB_USERNAME,
  BLOG_REPONAME,
  BLOG_PATH,
  BLOG_OUTPUT_PATH,
  GITHUB_TOKEN,
  TEST
}: BlogParameterType): Promise<void> {
  try {
    // Fetch blog data from Github API
    const blogData = await FetchBlogData({
      GITHUB_USERNAME,
      BLOG_REPONAME,
      BLOG_PATH,
      GITHUB_TOKEN,
      TEST
    })

    // Create blog data folder
    const BLOG_FOLDER = BLOG_OUTPUT_PATH
    await fs.promises.mkdir(BLOG_FOLDER, { recursive: true })

    const blogList: BlogListType[] = []

    const tagsList: string[] = []

    const tagsBlogList: TagBlogListType[] = []

    for (const blog of blogData) {
      const blogListData = {
        slug: blog.slug,
        image: blog.image,
        title: blog.title,
        description: blog.description,
        tags: blog.tags,
        date: blog.date
      }

      blogList.push(blogListData)

      // Write blog data to file
      const blogSlug = blog.slug.replace(BLOG_PATH, '')
      if (blogSlug.includes('/')) {
        // create folder
        const blogSlugFolder = blogSlug.split('/').slice(0, -1).join('/')
        await fs.promises.mkdir(`${BLOG_FOLDER}/${blogSlugFolder}`, {
          recursive: true
        })
      }
      core.debug(`Writing blog data to file...`)
      await fs.promises.writeFile(
        `${BLOG_FOLDER}/${blogSlug.toLowerCase()}.json`,
        JSON.stringify(blog)
      )

      // Collect tags list
      for (const tag of blog.tags) {
        if (!tagsList.includes(tag)) {
          tagsList.push(tag)
        }
      }

      // Collect tags blog list
      for (const tag of blog.tags) {
        const tagBlogList = tagsBlogList.find(
          (item: TagBlogListType) => item.tag === tag
        )
        if (tagBlogList) {
          tagBlogList.blogs.push(blogListData)
        } else {
          tagsBlogList.push({
            tag,
            blogs: [blogListData]
          })
        }
      }

      // Write blog list to file
      core.debug(`Writing blog list to file...`)
      await fs.promises.writeFile(
        `${BLOG_FOLDER}/blog.json`,
        JSON.stringify(blogList)
      )

      // Write tags list to file
      core.debug(`Writing tags list to file...`)
      await fs.promises.writeFile(
        `${BLOG_FOLDER}/tags.json`,
        JSON.stringify(tagsList)
      )

      // Create tags folder in blog data folder
      const TAGS_FOLDER = `${BLOG_FOLDER}/tags`
      await fs.promises.mkdir(TAGS_FOLDER, { recursive: true })

      // Write tags blog list to file
      core.debug(`Writing tags blog list to file...`)
      for (const tagData of tagsBlogList) {
        // Write tag blog list to file
        await fs.promises.writeFile(
          `${TAGS_FOLDER}/${tagData.tag.replace(/ /g, '-').toLowerCase()}.json`,
          JSON.stringify(tagData.blogs)
        )
      }
    }
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}
