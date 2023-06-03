import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://raw.githubusercontent.com/codinasion/ScriptHQ/program-data/languages.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
