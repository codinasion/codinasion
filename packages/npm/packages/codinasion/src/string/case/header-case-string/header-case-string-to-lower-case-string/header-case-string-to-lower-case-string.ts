/**
 * Converts a header case string to a lower case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted lower case string.
 */
export function HeaderCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, " ");
}
