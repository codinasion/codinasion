import { GetMemeData } from "@/data";

export const revalidate = 0;

export async function GET() {
  // Source: https://github.com/deep5050/programming-memes
  const meme = await GetMemeData();

  // Fetch image from GitHub as a Buffer
  const image = await fetch(meme.path).then((res) => res.arrayBuffer());

  // Sent image as a response
  return new Response(image, {
    headers: {
      "Content-Type": "image/png",
      // No cache
      "Cache-Control": "no-cache",
    },
  });
}
