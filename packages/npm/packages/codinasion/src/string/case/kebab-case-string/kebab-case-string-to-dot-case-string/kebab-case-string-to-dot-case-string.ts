/**
 * Converts a kebab-case string to a dot-case string.
 * Replaces all hyphens with dots.
 *
 * @param str - The kebab-case string to convert.
 * @returns The dot-case string.
 */
export function KebabCaseStringToDotCaseString(str: string): string {
  return str.replace(/-/g, ".");
}
