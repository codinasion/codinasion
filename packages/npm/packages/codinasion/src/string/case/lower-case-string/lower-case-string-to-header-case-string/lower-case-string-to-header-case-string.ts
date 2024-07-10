/**
 * Converts a lower case string to header case string.
 *
 * @param str - The lower case string to convert.
 * @returns The header case string.
 */
export function LowerCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
