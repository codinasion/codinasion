/**
 * Converts a title case string to a path case string.
 * Replaces spaces with slashes and converts to lowercase.
 *
 * @param str - The title case string to convert.
 * @returns The path case string.
 */
export function TitleCaseStringToPathCaseString(str: string): string {
  return str.replace(/\s+/g, "/").toLowerCase();
}
