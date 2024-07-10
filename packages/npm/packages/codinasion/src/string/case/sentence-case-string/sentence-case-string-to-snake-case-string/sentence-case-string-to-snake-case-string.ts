/**
 * Converts a sentence case string to snake case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The snake case string.
 */
export function SentenceCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "_");
}
