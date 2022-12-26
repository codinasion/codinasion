// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import fetch from "node-fetch"

import { responseType } from '..';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<responseType>
) {
    try {
        const { slug } = req.query

        // fetch data from github
        const programJson = await fetch(`https://raw.githubusercontent.com/codinasion/program/data/program/${slug}.json`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res: any) => res.json());

        res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
        res.status(200).json(programJson)
    } catch (error) {
        res.redirect(301, "/500");
    }

}
