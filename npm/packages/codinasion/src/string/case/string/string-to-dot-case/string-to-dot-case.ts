/**
 * Converts a string to dot case.
 *
 * @param str - The string to convert.
 * @returns The dot case representation of the input string.
 */
export function StringToDotCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join(".");
}
