/**
 * Converts an upper case string to title case string.
 *
 * @param str - The upper case string to convert.
 * @returns The title case string.
 */
export function UpperCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
