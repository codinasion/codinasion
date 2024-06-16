/**
 * Converts a dot case string to kebab case string.
 *
 * @param str - The dot case string to convert.
 * @returns The kebab case string.
 */
export function DotCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\./g, "-");
}
