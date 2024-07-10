/**
 * Converts a kebab-case string to a path-case string.
 * Replaces all hyphens with forward slashes.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted path-case string.
 */
export function KebabCaseStringToPathCaseString(str: string): string {
  return str.replace(/-/g, "/");
}
