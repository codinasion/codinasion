import { LanguageData } from "./data";
import type { LanguageDataType, GetLanguageDataInputType } from "./type";

/**
 * Get an array of language data objects based on the provided input.
 * @param name - The name of the language.
 * @param fileExtension - The file extension of the language.
 * @param prismTag - The Prism tag of the language.
 * @returns An array of language data objects.
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
