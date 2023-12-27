/**
 * Converts a kebab-case string to a lower case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted lower case string.
 */
export function KebabCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, " ");
}
