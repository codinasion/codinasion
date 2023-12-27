/**
 * Converts a string to kebab case.
 *
 * @param str - The string to convert.
 * @returns The kebab case representation of the string.
 */
export function StringToKebabCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("-");
}
