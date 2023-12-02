import * as core from "@actions/core";
import fetch from "node-fetch";
import type { Response } from "node-fetch";
import type { ProgramListParameterType } from "./types";

export default async function FetchProgramList({
  GITHUB_USERNAME,
  PROGRAM_REPONAME,
  PROGRAM_PATH,
  GITHUB_TOKEN,
  TEST,
}: ProgramListParameterType): Promise<string[]> {
  try {
    // Fetch program list from Github GraphQL API
    core.debug(`Fetching program list for ${GITHUB_USERNAME}...`);
    const query = `{
      repository(owner: "${GITHUB_USERNAME}", name: "${PROGRAM_REPONAME}") {
        object(expression: "HEAD:${PROGRAM_PATH}") {
          ... on Tree {
            entries {
              name
            }
          }
        }
      }
    }`;

    const response: Response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch program list: ${response.statusText}`);
    }

    const responseData: unknown = await response.json();

    const programList: string[] = [];

    const entries = (
      responseData as {
        data: {
          repository: {
            object: {
              entries: {
                name: string;
              }[];
            };
          };
        };
      }
    ).data.repository.object.entries;

    for (const entry of entries) {
      programList.push(entry.name);
      if (TEST === "true") {
        break;
      }
    }

    core.debug(`Program list fetched: ${programList.length}`);

    return programList;
  } catch (error) {
    core.setFailed(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }

  return [];
}
