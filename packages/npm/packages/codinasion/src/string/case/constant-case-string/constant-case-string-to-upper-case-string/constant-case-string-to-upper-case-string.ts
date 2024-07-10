/**
 * Converts a constant case string to an upper case string.
 *
 * @param str - The constant case string to convert.
 * @returns The converted upper case string.
 */
export function ConstantCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/_/g, " ");
}
