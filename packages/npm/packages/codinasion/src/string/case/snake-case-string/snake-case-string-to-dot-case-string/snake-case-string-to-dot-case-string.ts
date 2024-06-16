/**
 * Converts a snake case string to a dot case string.
 *
 * @param str - The snake case string to convert.
 * @returns The dot case string.
 */
export function SnakeCaseStringToDotCaseString(str: string): string {
  return str.replace(/_/g, ".");
}
