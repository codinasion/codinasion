/**
 * Converts a dot case string to a lower case string.
 *
 * @param str - The dot case string to convert.
 * @returns The converted lower case string.
 */
export function DotCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/\./g, " ");
}
