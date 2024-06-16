/**
 * Converts a string to path case.
 * Path case is a string format where words are separated by slashes ("/").
 * Words can be separated by spaces, underscores, or hyphens.
 * The resulting string is in lowercase.
 *
 * @param str - The input string to convert.
 * @returns The converted string in path case.
 */
export function StringToPathCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const lowerWords = words.map((word) => word.toLowerCase());
  return lowerWords.join("/");
}
