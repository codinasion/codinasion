/**
 * Converts a camel case string to kebab case string.
 *
 * @param str - The camel case string to convert.
 * @returns The kebab case string.
 */
export function CamelCaseStringToKebabCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
