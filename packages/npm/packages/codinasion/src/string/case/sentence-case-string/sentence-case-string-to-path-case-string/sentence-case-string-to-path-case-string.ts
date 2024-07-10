/**
 * Converts a sentence case string to a path case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The path case string.
 */
export function SentenceCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "/");
}
