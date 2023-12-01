import { LanguageData } from "./data";
import type { LanguageDataType, GetLanguageDataInputType } from "./type";

/**
 * Retrieves language data based on the provided input.
 * @param name - The name of the language (optional).
 * @param fileExtension - The file extension associated with the language (optional).
 * @param prismTag - The Prism tag associated with the language (optional).
 * @returns An array of language data matching the provided input.
 */
export function GetLanguageData({
  name,
  fileExtension,
  prismTag,
}: GetLanguageDataInputType): LanguageDataType[] {
  const language = LanguageData.filter((languageData) => {
    let extension = fileExtension || "";
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      if (fileExtension.startsWith(".")) {
        extension = fileExtension.slice(1);
      }
      return languageData.fileExtension.includes(extension);
    } else if (prismTag) {
      return languageData.prismTag === prismTag;
    }
    return [];
  });

  return language;
}
