/**
 * Converts a title case string to sentence case string.
 *
 * @param str - The title case string to convert.
 * @returns The converted sentence case string.
 */
export function TitleCaseStringToSentenceCaseString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
