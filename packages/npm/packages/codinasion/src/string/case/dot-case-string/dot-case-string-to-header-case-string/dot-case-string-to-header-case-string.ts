/**
 * Converts a dot case string to header case string.
 *
 * @param str - The dot case string to convert.
 * @returns The converted header case string.
 */
export function DotCaseStringToHeaderCaseString(str: string): string {
  return str
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
