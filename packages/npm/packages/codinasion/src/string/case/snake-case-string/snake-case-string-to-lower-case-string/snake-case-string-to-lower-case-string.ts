/**
 * Converts a snake case string to a lower case string.
 *
 * @param str - The snake case string to convert.
 * @returns The converted lower case string.
 */
export function SnakeCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, " ");
}
