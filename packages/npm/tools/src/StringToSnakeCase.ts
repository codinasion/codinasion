export function StringToSnakeCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("_");
}
