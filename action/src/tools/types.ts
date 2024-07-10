type ToolsListType = {
  filename: string
  text: string
}

type ToolsDataType = {
  slug: string
  markdown: string
}

type ToolsListParameterType = {
  GITHUB_USERNAME: string
  TOOLS_REPONAME: string
  TOOLS_PATH: string
  GITHUB_TOKEN: string
}

type ToolsDataParameterType = ToolsListParameterType & {
  TEST: string
}

type ToolsParameterType = ToolsDataParameterType & {
  TOOLS_OUTPUT_PATH: string
}

export type {
  ToolsListType,
  ToolsDataType,
  ToolsListParameterType,
  ToolsDataParameterType,
  ToolsParameterType
}
