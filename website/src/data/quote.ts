import type { QuoteType } from "@/types";

// Source: https://github.com/lukePeavey/quotable
export async function GetQuoteData(): Promise<QuoteType> {
  const res = await fetch("https://api.quotable.io/quotes/random", {
    method: "GET",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quote data");
  }

  const data = (await res.json()) as QuoteType[];

  return data[0] as QuoteType;
}
