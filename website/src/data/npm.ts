export async function GetNpmPackages(): Promise<string[]> {
  const response = await fetch(
    `${process.env.NPM_API_URL ?? ""}/-/user/codinasion/package`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
      },
      next: {
        revalidate: 3600,
      },
    } as RequestInit,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch NPM packages");
  }

  const data = (await response.json()) as Record<string, string>;

  const packages = Object.keys(data);

  return packages;
}

export async function GetNpmPackagesCount(): Promise<number> {
  const count = (await GetNpmPackages()).length;
  return Math.floor(count / 5) * 5;
}
