/**
 * Converts a title case string to dot case string.
 *
 * @param str - The title case string to convert.
 * @returns The dot case string.
 */
export function TitleCaseStringToDotCaseString(str: string): string {
  return str.replace(/\s+/g, ".").toLowerCase();
}
