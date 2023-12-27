/**
 * Converts a title case string to header case string.
 *
 * @param str - The title case string to convert.
 * @returns The converted header case string.
 */
export function TitleCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
