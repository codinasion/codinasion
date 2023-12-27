/**
 * Converts a snake case string to header case string.
 *
 * @param str - The snake case string to convert.
 * @returns The converted header case string.
 */
export function SnakeCaseStringToHeaderCaseString(str: string): string {
  return str
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
