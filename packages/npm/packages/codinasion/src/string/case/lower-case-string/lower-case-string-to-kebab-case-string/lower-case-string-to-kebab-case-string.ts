/**
 * Converts a lower case string to kebab case string.
 * Replaces all spaces with hyphens.
 *
 * @param str - The lower case string to convert.
 * @returns The kebab case string.
 */
export function LowerCaseStringToKebabCaseString(str: string): string {
  return str.replace(/ /g, "-");
}
