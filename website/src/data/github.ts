import type { GithubUserDataType } from "@/types";

export async function GetGithubUserData(
  username: string,
): Promise<GithubUserDataType> {
  const apiQuery = `${process.env.GITHUB_API_URL ?? ""}/users/${username}`;

  const response = await fetch(apiQuery, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 3600 },
  } as RequestInit);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Github User Data: ${response.statusText} for ${apiQuery}`,
    );
  }

  const data = (await response.json()) as GithubUserDataType;

  return data;
}
