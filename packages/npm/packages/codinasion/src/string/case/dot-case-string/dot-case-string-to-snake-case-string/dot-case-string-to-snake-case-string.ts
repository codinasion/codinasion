/**
 * Converts a dot case string to a snake case string.
 *
 * @param str - The dot case string to convert.
 * @returns The converted snake case string.
 */
export function DotCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/\./g, "_");
}
