// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import fetch from "node-fetch"

export type responseType = {
  slug: string
  title: string
  trackId: number
  tags: string[]
  contributors: string[]
  latestUpdateDate: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseType[]>
) {
  // fetch data from github
  const programListJson = await fetch("https://raw.githubusercontent.com/codinasion/program/data/programList.json",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res: any) => res.json());

  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.status(200).json(programListJson)
}
