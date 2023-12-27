/**
 * Converts an upper case string to constant case string by replacing spaces with underscores.
 *
 * @param str - The upper case string to be converted.
 * @returns The constant case string.
 */
export function UpperCaseStringToConstantCaseString(str: string): string {
  return str.replace(/ /g, "_");
}
