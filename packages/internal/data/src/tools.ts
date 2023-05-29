export async function GetToolsList({
  REPO_OWNER = "codinasion",
  REPO_NAME = "codinasion",
  TOOLS_PATH = "packages/npm/tools/src/",
  GITHUB_GRAPHQL_API_URL = "https://api.github.com/graphql",
  GRAPHQL_TOKEN,
}: {
  REPO_OWNER?: string;
  REPO_NAME?: string;
  TOOLS_PATH?: string;
  GITHUB_GRAPHQL_API_URL?: string;
  GRAPHQL_TOKEN?: string;
}) {
  const query = `{
        repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
          object(expression: "HEAD:${TOOLS_PATH}") {
            ... on Tree {
              entries {
                name
                type
              }
            }
          }
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

  // Return list of name with type="blob"
  return data.repository
    ? data.repository.object.entries
        .filter((entry: any) => entry.type === "blob")
        .map((entry: any) => entry.name)
    : [];
}
