// Source: https://github.com/lukePeavey/quotable
interface QuoteType {
  _id: string
  content: string
  author: string
  authorSlug: string
  length: number
  tags: string[]
}

export type { QuoteType }
