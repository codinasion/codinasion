/**
 * Converts an upper case string to dot case string.
 * Replaces spaces with dots and converts the string to lowercase.
 *
 * @param str - The upper case string to convert.
 * @returns The dot case string.
 */
export function UpperCaseStringToDotCaseString(str: string): string {
  return str.replace(/ /g, ".").toLowerCase();
}
