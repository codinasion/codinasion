/**
 * Converts a lower case string to constant case string.
 *
 * @param str - The lower case string to convert.
 * @returns The constant case string.
 */
export function LowerCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/ /g, "_");
}
