/**
 * Converts a path case string to a dot case string.
 *
 * @param str - The path case string to convert.
 * @returns The dot case string.
 */
export function PathCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, ".");
}
