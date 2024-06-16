/**
 * Converts a lower case string to title case string.
 *
 * @param str - The lower case string to convert.
 * @returns The title case string.
 */
export function LowerCaseStringToTitleCaseString(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
