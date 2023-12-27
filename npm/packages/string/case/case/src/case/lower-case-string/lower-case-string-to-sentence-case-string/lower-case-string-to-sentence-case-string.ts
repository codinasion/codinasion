/**
 * Converts a lower case string to sentence case string.
 * @param str - The lower case string to convert.
 * @returns The sentence case string.
 */
export function LowerCaseStringToSentenceCaseString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
