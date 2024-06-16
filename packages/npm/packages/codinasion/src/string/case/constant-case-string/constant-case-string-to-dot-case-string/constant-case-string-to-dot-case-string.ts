/**
 * Converts a constant case string to dot case string.
 *
 * @param str - The constant case string to convert.
 * @returns The dot case string.
 */
export function ConstantCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, ".");
}
