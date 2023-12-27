/**
 * Converts a sentence case string to dot case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The dot case string.
 */
export function SentenceCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, ".");
}
