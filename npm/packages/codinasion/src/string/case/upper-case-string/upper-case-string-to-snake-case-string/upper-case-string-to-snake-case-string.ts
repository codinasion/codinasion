/**
 * Converts an upper case string to snake case string.
 * Replaces spaces with underscores and converts to lowercase.
 *
 * @param str - The upper case string to convert.
 * @returns The converted snake case string.
 */
export function UpperCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/ /g, "_").toLowerCase();
}
