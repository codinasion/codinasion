import { GetMemeData } from "@/data";

export const revalidate = 0;

export async function GET() {
  // Source: https://github.com/deep5050/programming-memes
  const meme = await GetMemeData();

  return Response.json(meme);
}
