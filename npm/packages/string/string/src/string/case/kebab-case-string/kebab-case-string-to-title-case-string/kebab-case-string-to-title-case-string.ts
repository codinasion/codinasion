/**
 * Converts a kebab-case string to title case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The title case string.
 */
export function KebabCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
