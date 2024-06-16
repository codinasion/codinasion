/**
 * Converts a sentence case string to constant case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The converted constant case string.
 */
export function SentenceCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\s+/g, "_");
}
