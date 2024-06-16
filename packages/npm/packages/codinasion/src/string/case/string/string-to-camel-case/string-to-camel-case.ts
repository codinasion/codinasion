/**
 * Converts a string to camel case.
 *
 * @param str - The string to convert.
 * @returns The camel case version of the string.
 */
export function StringToCamelCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  // @ts-expect-error - words[0] is not undefined
  const firstWord = words[0].toLowerCase();
  const restWords = words
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return firstWord + restWords.join("");
}
