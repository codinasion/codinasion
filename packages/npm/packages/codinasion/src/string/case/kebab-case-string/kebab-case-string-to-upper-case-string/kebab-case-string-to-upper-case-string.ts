/**
 * Converts a kebab-case string to an upper case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted upper case string.
 */
export function KebabCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, " ");
}
