/**
 * Converts a title case string to camel case string.
 *
 * @param str - The title case string to convert.
 * @returns The camel case string.
 */
export function TitleCaseStringToCamelCaseString(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/\s+/g, "");
}
