import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Welcome to the Codinasion API 🤗",
    routes: [
      {
        path: "/",
        description: "Codinasion API home",
      },
      //
      // Github data routes
      {
        path: "/github/contributors",
        description: "List of Codinasion contributors",
      },
      {
        path: "/github/members",
        description: "List of Codinasion members",
      },
      {
        path: "/github/repos",
        description: "List of Codinasion repositories",
      },
      //
      // Program data routes
      {
        path: "/program",
        description: "List of programs",
      },
      {
        path: "/program/[slug]",
        description: "Specific program data",
      },
      {
        path: "/program/languages",
        description: "List of languages used in programs",
      },
      {
        path: "/program/languages/[language]",
        description: "Language specific list of programs",
      },
    ],
  };

  return NextResponse.json({ data });
}
