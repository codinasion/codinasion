import LanguageData from "../data";
import type { LanguageDataType, GetLanguageDataInputType } from "../type";

export default function getLanguageData({
  name,
  fileExtension,
  prismTag,
}: GetLanguageDataInputType): LanguageDataType[] {
  const language = LanguageData.filter((languageData) => {
    if (name) {
      return languageData.name.toLowerCase() === name.toLowerCase();
    } else if (fileExtension) {
      if (fileExtension[0] === ".") {
        fileExtension = fileExtension.slice(1);
      }
      return languageData.fileExtension.includes(fileExtension);
    } else if (prismTag) {
      return languageData.prismTag === prismTag;
    }
  });

  if (language) {
    return language;
  } else {
    return [];
  }
}
