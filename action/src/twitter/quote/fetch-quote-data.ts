import * as core from "@actions/core";
import fetch from "node-fetch";
import type { Response } from "node-fetch";
import type { QuoteType } from "./types";

export default async function FetchQuoteData(): Promise<QuoteType> {
  try {
    // Fetch quote data
    // Source: https://github.com/lukePeavey/quotable
    const response: Response = await fetch(
      "https://api.quotable.io/quotes/random",
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Quote data: ${response.statusText}`);
    }

    const data = (await response.json()) as QuoteType[];

    return data[0] as QuoteType;
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }

  return {} as QuoteType;
}
