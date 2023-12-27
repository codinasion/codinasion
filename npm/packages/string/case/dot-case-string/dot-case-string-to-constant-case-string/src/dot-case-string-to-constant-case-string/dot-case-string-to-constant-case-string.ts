/**
 * Converts a dot case string to constant case string.
 *
 * @param str - The dot case string to convert.
 * @returns The converted constant case string.
 */
export function DotCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\./g, "_");
}
