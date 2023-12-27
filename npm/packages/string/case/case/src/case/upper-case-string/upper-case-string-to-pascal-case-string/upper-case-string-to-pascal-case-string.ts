/**
 * Converts an upper case string to a Pascal case string.
 *
 * @param str - The upper case string to convert.
 * @returns The converted Pascal case string.
 */
export function UpperCaseStringToPascalCaseString(str: string): string {
  if (!str.includes(" ")) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
