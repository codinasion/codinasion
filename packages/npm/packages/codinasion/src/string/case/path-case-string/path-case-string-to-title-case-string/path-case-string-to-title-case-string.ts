/**
 * Converts a path case string to title case string.
 *
 * @param str - The path case string to convert.
 * @returns The title case string.
 */
export function PathCaseStringToTitleCaseString(str: string): string {
  return str
    .split("/")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
