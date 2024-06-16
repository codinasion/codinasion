/**
 * Converts a path case string to header case string.
 *
 * @param str - The path case string to convert.
 * @returns The converted header case string.
 */
export function PathCaseStringToHeaderCaseString(str: string): string {
  return str
    .split("/")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
