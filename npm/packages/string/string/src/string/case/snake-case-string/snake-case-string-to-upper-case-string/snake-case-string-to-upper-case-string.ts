/**
 * Converts a snake case string to an upper case string.
 *
 * @param str - The snake case string to convert.
 * @returns The converted upper case string.
 */
export function SnakeCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
