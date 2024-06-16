/**
 * Converts an upper case string to header case string.
 * If the input string is not entirely in upper case, it returns the original string.
 * Otherwise, it converts the string to lower case, splits it by spaces, capitalizes the first letter of each word,
 * and joins them with hyphens.
 *
 * @param str - The input string to be converted.
 * @returns The converted header case string or the original string if it is not entirely in upper case.
 */
export function UpperCaseStringToHeaderCaseString(str: string): string {
  if (str !== str.toUpperCase()) {
    return str;
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
