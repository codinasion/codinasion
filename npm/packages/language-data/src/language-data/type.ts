interface LanguageDataType {
  name: string;
  fileExtension: string[];
  namingConvention: "PascalCase" | "camelCase" | "snake_case" | "kebab-case";
  prismTag: string;
  logo: string;
}

interface GetLanguageDataInputType {
  name?: string;
  fileExtension?: string;
  prismTag?: string;
}

export type { LanguageDataType, GetLanguageDataInputType };
