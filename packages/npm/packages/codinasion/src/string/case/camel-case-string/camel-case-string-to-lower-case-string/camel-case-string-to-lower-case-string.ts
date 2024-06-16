/**
 * Converts a camel case string to a lower case string.
 *
 * @param str - The camel case string to convert.
 * @returns The converted lower case string.
 */
export function CamelCaseStringToLowerCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).trim();
}
