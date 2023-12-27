/**
 * Converts a header case string to a snake case string.
 *
 * @param str - The header case string to convert.
 * @returns The snake case string.
 */
export function HeaderCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "_");
}
