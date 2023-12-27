/**
 * Converts an upper case string to camel case string.
 *
 * @param str - The upper case string to convert.
 * @returns The camel case string.
 */
export function UpperCaseStringToCamelCaseString(str: string): string {
  if (!str.includes(" ")) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/^\w/, (c) => c.toLowerCase());
}
