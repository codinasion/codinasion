/**
 * Converts a path case string to an upper case string.
 *
 * @param str - The path case string to convert.
 * @returns The converted upper case string.
 */
export function PathCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/\//g, " ");
}
