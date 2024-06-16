/**
 * Converts a header case string to title case string.
 *
 * @param str - The header case string to convert.
 * @returns The title case string.
 */
export function HeaderCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}
