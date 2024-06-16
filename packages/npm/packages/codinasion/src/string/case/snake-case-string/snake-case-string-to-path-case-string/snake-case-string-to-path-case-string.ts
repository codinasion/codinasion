/**
 * Converts a snake case string to a path case string.
 * Replaces all underscores (_) with forward slashes (/).
 *
 * @param str - The snake case string to convert.
 * @returns The path case string.
 */
export function SnakeCaseStringToPathCaseString(str: string): string {
  return str.replace(/_/g, "/");
}
