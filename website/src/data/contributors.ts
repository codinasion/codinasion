export async function GetContributorsList(): Promise<string[]> {
  const res = await fetch(
    `${process.env.CONTRIBUTORS_DATA_URL}/contributors.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch contributors list");
  }

  const data = (await res.json()) as string[];

  return data;
}
