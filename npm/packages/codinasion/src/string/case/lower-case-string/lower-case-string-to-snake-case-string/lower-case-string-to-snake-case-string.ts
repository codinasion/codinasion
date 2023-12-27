/**
 * Converts a lower case string to snake case string.
 * Replaces all spaces with underscores.
 *
 * @param str - The lower case string to convert.
 * @returns The snake case string.
 */
export function LowerCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/ /g, "_");
}
