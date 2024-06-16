/**
 * Converts a lower case string to a path case string.
 * Replaces spaces with slashes.
 *
 * @param str - The lower case string to convert.
 * @returns The path case string.
 */
export function LowerCaseStringToPathCaseString(str: string): string {
  return str.replace(/ /g, "/");
}
