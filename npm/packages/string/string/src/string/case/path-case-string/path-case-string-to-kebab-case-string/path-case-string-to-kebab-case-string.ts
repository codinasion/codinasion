/**
 * Converts a path case string to kebab case string.
 *
 * @param str - The path case string to convert.
 * @returns The kebab case string.
 */
export function PathCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, "-");
}
