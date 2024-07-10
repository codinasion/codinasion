/**
 * Converts a header case string to kebab case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted kebab case string.
 */
export function HeaderCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "_").replace(/_/g, "-");
}
