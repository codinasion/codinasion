import toolsData from "@/components/Tools/tools.json";
import type { ToolDataType, ToolContentDataType } from "@/types";

export function GetToolsData(): ToolDataType[] {
  const tools = toolsData as ToolDataType[];

  const toolsDataList: ToolDataType[] = tools.filter((tool) => !tool.ignore);

  return toolsDataList;
}

export async function GetToolContentData(
  slug: string,
): Promise<ToolContentDataType> {
  const dummyData = {
    slug,
    markdown: "No Data Available",
  };

  try {
    const res = await fetch(`${process.env.TOOLS_DATA_URL}/${slug}.json`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CODINASION_GITHUB_TOKEN ?? ""}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.log(`Failed to fetch program data for ${slug}`);
      return dummyData;
    }

    const data = (await res.json()) as ToolContentDataType;

    return data;
  } catch (error) {
    console.log(error);
    return dummyData;
  }
}

export function GetToolsTagsData(): string[] {
  const tools = toolsData as ToolDataType[];

  const toolsTags: string[] = tools
    .filter((tool) => !tool.ignore)
    .flatMap((tool) => tool.tags)
    .filter((tag, index, self) => self.indexOf(tag) === index);

  return toolsTags;
}

export function GetTagsDataByTool(tool: string): string[] {
  const tools = toolsData as ToolDataType[];

  const tags: string[] = tools.find((t) => t.name === tool)?.tags || [];

  return tags;
}

export function GetToolsDataByTag(tag: string): ToolDataType[] {
  const tools = toolsData as ToolDataType[];

  const toolsList: ToolDataType[] = tools.filter(
    (tool) => !tool.ignore && tool.tags.includes(tag),
  );

  return toolsList;
}

export function GetToolsDataByTags(tags: string[]): ToolDataType[] {
  const tools = toolsData as ToolDataType[];

  const toolsList: ToolDataType[] = tools.filter(
    (tool) => !tool.ignore && tool.tags.some((tag) => tags.includes(tag)),
  );

  return toolsList;
}

export function GetSimilarToolsData(name: string): ToolDataType[] {
  const tools = toolsData as ToolDataType[];

  const similarTools: ToolDataType[] = GetToolsDataByTags(
    tools.find((t) => t.name === name)?.tags || [],
  ).filter((t) => t.name !== name);

  return similarTools;
}
