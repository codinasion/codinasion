/**
 * Converts a header case string to a dot case string.
 *
 * @param str - The header case string to convert.
 * @returns The dot case string.
 */
export function HeaderCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, ".");
}
