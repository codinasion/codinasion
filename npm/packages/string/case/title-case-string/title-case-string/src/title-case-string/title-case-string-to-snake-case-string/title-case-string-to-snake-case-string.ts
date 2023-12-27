/**
 * Converts a title case string to snake case string.
 *
 * @param str - The title case string to convert.
 * @returns The snake case string.
 */
export function TitleCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toLowerCase();
}
