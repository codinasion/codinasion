/**
 * Converts a lower case string to dot case string.
 * Replaces all spaces with dots.
 *
 * @param str - The lower case string to convert.
 * @returns The dot case string.
 */
export function LowerCaseStringToDotCaseString(str: string): string {
  return str.replace(/ /g, ".");
}
