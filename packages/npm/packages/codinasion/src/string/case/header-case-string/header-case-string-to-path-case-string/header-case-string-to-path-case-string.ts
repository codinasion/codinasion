/**
 * Converts a header case string to a path case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted path case string.
 */
export function HeaderCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "/");
}
