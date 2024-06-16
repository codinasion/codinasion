/**
 * Converts a dot case string to title case string.
 *
 * @param str - The dot case string to convert.
 * @returns The title case string.
 */
export function DotCaseStringToTitleCaseString(str: string): string {
  return str
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
