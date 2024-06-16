/**
 * Converts a dot case string to an upper case string.
 * Replaces all dots with spaces and converts the string to uppercase.
 *
 * @param str - The dot case string to convert.
 * @returns The converted upper case string.
 */
export function DotCaseStringToUpperCaseString(str: string): string {
  return str.replace(/\./g, " ").toUpperCase();
}
