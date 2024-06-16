/**
 * Converts a dot case string to a path case string.
 * Replaces all occurrences of "." with "/".
 *
 * @param str - The dot case string to convert.
 * @returns The converted path case string.
 */
export function DotCaseStringToPathCaseString(str: string): string {
  return str.replace(/\./g, "/");
}
