/**
 * Converts an upper case string to sentence case string.
 *
 * @param str - The upper case string to convert.
 * @returns The converted sentence case string.
 */
export function UpperCaseStringToSentenceCaseString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
