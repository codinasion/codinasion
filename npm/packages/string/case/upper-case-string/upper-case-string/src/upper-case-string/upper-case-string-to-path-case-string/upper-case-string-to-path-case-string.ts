/**
 * Converts an upper case string to a path case string.
 * Replaces spaces with slashes and converts to lowercase.
 *
 * @param str - The upper case string to convert.
 * @returns The converted path case string.
 */
export function UpperCaseStringToPathCaseString(str: string): string {
  return str.replace(/ /g, "/").toLowerCase();
}
