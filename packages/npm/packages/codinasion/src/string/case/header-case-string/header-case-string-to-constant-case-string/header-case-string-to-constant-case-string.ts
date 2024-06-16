/**
 * Converts a header case string to a constant case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted constant case string.
 */
export function HeaderCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, "_");
}
