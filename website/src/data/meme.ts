import type { MemeType } from "@/types";

// Source: https://github.com/deep5050/programming-memes
export async function GetMemeData(): Promise<MemeType> {
  // Get memes.json
  const res = await fetch(
    "https://raw.githubusercontent.com/deep5050/programming-memes/main/memes.json",
    {
      method: "GET",
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch memes.json data");
  }

  const data = (await res.json()) as MemeType[];

  // Randomly select a meme
  const meme = data[Math.floor(Math.random() * data.length)] as MemeType;

  // Update meme path data
  meme.path = `https://raw.githubusercontent.com/deep5050/programming-memes/main/${meme?.path}`;

  return meme as MemeType;
}
