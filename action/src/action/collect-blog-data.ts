import * as core from '@actions/core'
import { default as CollectBlogDataFn } from '../blog/collect-blog-data'
import dotenv from 'dotenv'

dotenv.config()

export default async function CollectBlogData(): Promise<void> {
  try {
    CollectBlogDataFn({
      GITHUB_USERNAME: 'codinasion',
      BLOG_REPONAME: 'codinasion-private',
      BLOG_PATH: 'content/blog/',
      BLOG_OUTPUT_PATH: 'blog-data',
      GITHUB_TOKEN:
        core.getInput('GITHUB_TOKEN') ||
        process.env.CODINASION_GITHUB_TOKEN ||
        '',
      TEST: core.getInput('TEST') || 'true'
    })
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : 'Unknown error occurred'
    )
  }
}

// // Test the function
// CollectBlogData();
