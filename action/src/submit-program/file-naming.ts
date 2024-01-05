interface LanguageDataType {
  namingConvension: string;
  fileExtension: string;
}

export default function FileNaming(
  filename: string,
  languageData: LanguageDataType,
): string {
  if (languageData.namingConvension === "camelCase") {
    return `${camelCase(filename)}.${languageData.fileExtension}`;
  }
  if (languageData.namingConvension === "kebab-case") {
    return `${kebabCase(filename)}.${languageData.fileExtension}`;
  }
  if (languageData.namingConvension === "snake_case") {
    return `${snakeCase(filename)}.${languageData.fileExtension}`;
  }
  if (languageData.namingConvension === "PascalCase") {
    return `${PascalCase(filename)}.${languageData.fileExtension}`;
  }
  return `${filename}.${languageData.fileExtension}`;
}

function camelCase(filename: string): string {
  return filename
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

function kebabCase(filename: string): string {
  return filename.toLowerCase().split(" ").join("-");
}

function snakeCase(filename: string): string {
  return filename.toLowerCase().split(" ").join("_");
}

function PascalCase(filename: string): string {
  return filename
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}
