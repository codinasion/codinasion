/**
 * Converts a constant case string to a lower case string.
 *
 * @param str - The constant case string to convert.
 * @returns The lower case string.
 */
export function ConstantCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, " ");
}
