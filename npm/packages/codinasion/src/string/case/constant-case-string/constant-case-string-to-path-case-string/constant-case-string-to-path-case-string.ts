/**
 * Converts a constant case string to a path case string.
 *
 * @param str - The constant case string to convert.
 * @returns The converted path case string.
 */
export function ConstantCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "/");
}
