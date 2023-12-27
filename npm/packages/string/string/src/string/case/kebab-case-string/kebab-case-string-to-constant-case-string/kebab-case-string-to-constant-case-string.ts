/**
 * Converts a kebab-case string to a constant case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted constant case string.
 */
export function KebabCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, "_");
}
