export async function GET() {
  const availableRoutes = [
    {
      path: "/api/quote",
      description: "Get a random quote data",
      source: "https://github.com/lukePeavey/quotable",
    },
    {
      path: "/api/meme",
      description: "Get a random meme data",
      source: "https://github.com/deep5050/programming-memes",
    },
    {
      path: "/api/meme/image",
      description: "Get a random meme image",
      source: "https://github.com/deep5050/programming-memes",
    },
  ];

  return Response.json(availableRoutes);
}
