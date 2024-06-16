/**
 * Converts a path case string to a snake case string.
 *
 * @param str - The path case string to convert.
 * @returns The snake case string.
 */
export function PathCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, "_");
}
