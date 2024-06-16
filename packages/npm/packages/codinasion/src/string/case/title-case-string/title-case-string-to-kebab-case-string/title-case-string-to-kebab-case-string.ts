/**
 * Converts a title case string to kebab case string.
 *
 * @param str - The title case string to be converted.
 * @returns The kebab case string.
 */
export function TitleCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\s+/g, "-").toLowerCase();
}
