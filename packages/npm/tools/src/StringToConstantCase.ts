export function StringToConstantCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const upperWords = words.map((word) => word.toUpperCase());
  return upperWords.join("_");
}
