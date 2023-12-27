/**
 * Converts an upper case string to kebab case string.
 * Replaces spaces with hyphens and converts the string to lowercase.
 *
 * @param str - The upper case string to convert.
 * @returns The kebab case string.
 */
export function UpperCaseStringToKebabCaseString(str: string): string {
  return str.replace(/ /g, "-").toLowerCase();
}
