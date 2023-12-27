/**
 * Converts a title case string to constant case string.
 *
 * @param str - The title case string to convert.
 * @returns The converted constant case string.
 */
export function TitleCaseStringToConstantCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toUpperCase();
}
