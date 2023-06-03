export async function GetProgramList() {
  const res = await fetch(`${process.env.CODINASION_API_URL}/program`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program list");
  }

  const data = await res.json();

  return data;
}

export async function GetProgramData(slug: string) {
  const res = await fetch(`${process.env.CODINASION_API_URL}/program/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch program data for ${slug}`);
  }

  const data = await res.json();

  return data;
}

export async function GetProgramLanguageList() {
  const res = await fetch(
    `${process.env.CODINASION_API_URL}/program/languages`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program languages list");
  }

  const data = await res.json();

  return data;
}

export async function GetProgramLanguageProgramList(language: string = "c") {
  language = language.toLowerCase();

  const res = await fetch(
    `${process.env.CODINASION_API_URL}/program/languages/${language}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch program languages program list for ${language}`
    );
  }

  const data = await res.json();

  return data;
}
