export async function GetRepositoryStargazerCount({
  REPO_OWNER = "codinasion",
  REPO_NAME = "codinasion",
  GITHUB_GRAPHQL_API_URL = "https://api.github.com/graphql",
  GRAPHQL_TOKEN,
}: {
  REPO_OWNER?: string;
  REPO_NAME?: string;
  GITHUB_GRAPHQL_API_URL?: string;
  GRAPHQL_TOKEN?: string;
}) {
  const query = `{
        repository(name: "${REPO_NAME}", owner: "${REPO_OWNER}") {
          stargazerCount
        }
      }`;

  const response = await fetch(`${GITHUB_GRAPHQL_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${GRAPHQL_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return data.repository ? data.repository.stargazerCount : 0;
}
