/**
 * Converts a path case string to a sentence case string.
 *
 * @param str - The path case string to convert.
 * @returns The converted sentence case string.
 */
export function PathCaseStringToSentenceCaseString(str: string): string {
  const result = str.toLowerCase().replace(/\//g, " ").trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
