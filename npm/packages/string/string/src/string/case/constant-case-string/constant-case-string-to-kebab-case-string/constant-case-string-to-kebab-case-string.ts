/**
 * Converts a constant case string to kebab case string.
 *
 * @param str - The constant case string to convert.
 * @returns The kebab case string.
 */
export function ConstantCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/_/g, "-");
}
