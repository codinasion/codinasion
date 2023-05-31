import LanguageData from "../data";
import type { RenameFileInputType } from "../type";

import {
  StringToCamelCase,
  StringToKebabCase,
  StringToPascalCase,
  StringToSnakeCase,
} from "@codinasion/tools";

export default function renameFile({
  name,
  fileExtension,
  fileName = "file-name",
}: RenameFileInputType): string {
  const language = LanguageData.filter((languageData) => {
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      let tempFileExtension = "";
      if (fileExtension[0] === ".") {
        tempFileExtension = fileExtension.slice(1);
      }
      return languageData.fileExtension.includes(tempFileExtension);
    } else if (fileName) {
      const tempFileExtension = fileName.split(".").pop();
      if (tempFileExtension) {
        return languageData.fileExtension.includes(tempFileExtension);
      }
    }
  });

  const namingConvention = language[0].namingConvention;
  let fileSlug = fileName.split(".")[0];
  const fileExt = fileName.split(".").pop();

  switch (namingConvention) {
    case "PascalCase":
      fileSlug = StringToPascalCase(fileSlug);
      break;
    case "camelCase":
      fileSlug = StringToCamelCase(fileSlug);
      break;
    case "snake_case":
      fileSlug = StringToSnakeCase(fileSlug);
      break;
    case "kebab-case":
      fileSlug = StringToKebabCase(fileSlug);
      break;
    default:
      break;
  }

  return `${fileSlug}.${fileExt}`;
}
