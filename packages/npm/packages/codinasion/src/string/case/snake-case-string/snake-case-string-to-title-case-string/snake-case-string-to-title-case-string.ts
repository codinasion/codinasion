/**
 * Converts a snake case string to title case string.
 *
 * @param str - The snake case string to convert.
 * @returns The title case string.
 */
export function SnakeCaseStringToTitleCaseString(str: string): string {
  return str
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
