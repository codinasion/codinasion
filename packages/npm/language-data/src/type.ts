export type LanguageDataType = {
  name: string;
  fileExtension: string[];
  namingConvention: "PascalCase" | "camelCase" | "snake_case" | "kebab-case";
  prismTag: string;
  logo: string;
};

export type GetLanguageDataInputType = {
  name?: string;
  fileExtension?: string;
  prismTag?: string;
};

export type RenameFileInputType = {
  name?: string;
  fileExtension?: string;
  fileName: string;
};
