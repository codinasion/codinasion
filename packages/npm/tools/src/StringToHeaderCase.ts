export function StringToHeaderCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const headerWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return headerWords.join("-");
}
