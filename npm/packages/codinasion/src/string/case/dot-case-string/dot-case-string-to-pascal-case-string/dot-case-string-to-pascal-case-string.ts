/**
 * Converts a dot case string to pascal case string.
 *
 * @param str - The dot case string to convert.
 * @returns The pascal case string.
 */
export function DotCaseStringToPascalCaseString(str: string): string {
  return str
    .split(".")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
