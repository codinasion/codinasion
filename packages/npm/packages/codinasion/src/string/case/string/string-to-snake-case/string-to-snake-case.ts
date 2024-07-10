/**
 * Converts a string to snake case.
 *
 * @param str - The string to convert.
 * @returns The snake case representation of the input string.
 */
export function StringToSnakeCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("_");
}
