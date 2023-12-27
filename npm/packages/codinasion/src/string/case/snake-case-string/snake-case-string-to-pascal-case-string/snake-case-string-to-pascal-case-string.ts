/**
 * Converts a snake case string to a pascal case string.
 *
 * @param str - The snake case string to convert.
 * @returns The pascal case string.
 */
export function SnakeCaseStringToPascalCaseString(str: string): string {
  return str
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
