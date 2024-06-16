/**
 * Converts a header case string to an upper case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted upper case string.
 */
export function HeaderCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, " ");
}
