/**
 * Converts a path case string to a constant case string.
 *
 * @param str - The path case string to convert.
 * @returns The converted constant case string.
 */
export function PathCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\//g, "_");
}
