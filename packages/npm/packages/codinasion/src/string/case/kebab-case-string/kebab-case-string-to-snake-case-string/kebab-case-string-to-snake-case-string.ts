/**
 * Converts a kebab-case string to a snake_case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted snake_case string.
 */
export function KebabCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/-/g, "_");
}
