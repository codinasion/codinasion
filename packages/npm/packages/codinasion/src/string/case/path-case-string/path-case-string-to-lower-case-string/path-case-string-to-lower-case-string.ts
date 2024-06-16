/**
 * Converts a path case string to a lower case string.
 *
 * @param str - The path case string to convert.
 * @returns The converted lower case string.
 */
export function PathCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, " ");
}
