/**
 * Converts a snake case string to kebab case string.
 *
 * @param str - The snake case string to convert.
 * @returns The kebab case string.
 */
export function SnakeCaseStringToKebabCaseString(str: string): string {
  return str.replace(/_/g, "-");
}
