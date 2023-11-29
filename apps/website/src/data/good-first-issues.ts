import type { GoodFirstIssueType, GoodFirstIssueLabelDataType } from "@/types";
import { EncodeURI } from "@/utils";

const LanguageList = [
  "c",
  "c++",
  "c#",
  "dart",
  "f#",
  "go",
  "haskell",
  "java",
  "javascript",
  "julia",
  "kotlin",
  "perl",
  "php",
  "python",
  "r",
  "ruby",
  "rust",
  "scala",
  "swift",
  "typescript",
];

export { LanguageList };

export async function GetGoodFirstIssue({
  language = null,
  perPage = 100,
  page = 1,
}: {
  language?: string | null;
  perPage?: number;
  page?: number;
}): Promise<GoodFirstIssueType[]> {
  const apiQuery = `${
    process.env.GITHUB_API_URL ?? ""
  }/search/issues?q=is%3Aissue+label%3A%22good+first+issue%22${
    language ? `+label%3A${EncodeURI(language)}` : ""
  }+state:open+no%3Aassignee&sort=created&order=desc&per_page=${perPage}&page=${page}`;

  const response = await fetch(apiQuery, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
    },
    next: { revalidate: 600 },
  } as RequestInit);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Good First Issues: ${response.statusText} for ${apiQuery}`,
    );
  }

  const data = (await response.json()) as {
    total_count: number;
    incomplete_results: boolean;
    items: GoodFirstIssueType[];
  };

  return data.items;
}

export function GetGoodFirstIssueLabelsData(
  goodFirstIssues: GoodFirstIssueType[],
): GoodFirstIssueLabelDataType[] {
  const labels: GoodFirstIssueLabelDataType[] = [];

  goodFirstIssues.forEach((issue) => {
    if (issue.labels) {
      issue.labels.forEach((label) => {
        const labelIndex = labels.findIndex(
          (labelData) => labelData.label === label.name,
        );

        if (labelIndex === -1) {
          labels.push({
            label: label.name,
            count: 1,
          });
        } else {
          // @ts-expect-error - We know this exists
          labels[labelIndex].count++;
        }
      });
    }
  });

  // Sort by count, then by label name
  labels.sort((a, b) => {
    if (a.count === b.count) {
      return a.label.localeCompare(b.label);
    }

    return b.count - a.count;
  });

  return labels;
}
