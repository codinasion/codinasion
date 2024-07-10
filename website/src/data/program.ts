import type { ProgramListType, ProgramDataType } from "@/types";

export async function GetProgramList(): Promise<ProgramListType[]> {
  const res = await fetch(`${process.env.PROGRAM_DATA_URL}/program.json`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program list");
  }

  const data = (await res.json()) as ProgramListType[];

  return data;
}

export async function GetProgramData(slug: string): Promise<ProgramDataType> {
  const res = await fetch(`${process.env.PROGRAM_DATA_URL}/${slug}.json`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch program data for ${slug}`);
  }

  const data = (await res.json()) as ProgramDataType;

  return data;
}

export async function GetProgramLanguageList(): Promise<string[]> {
  const res = await fetch(`${process.env.PROGRAM_DATA_URL}/languages.json`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program languages list");
  }

  const data = (await res.json()) as string[];

  return data;
}

export async function GetProgramLanguageProgramList(
  language: string,
): Promise<ProgramListType[]> {
  const res = await fetch(
    `${process.env.PROGRAM_DATA_URL}/languages/${language.toLowerCase()}.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch program languages program list for ${language}`,
    );
  }

  const data = (await res.json()) as ProgramListType[];

  return data;
}
