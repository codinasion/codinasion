/**
 * Converts a camel case string to a constant case string.
 *
 * @param str - The camel case string to convert.
 * @returns The converted constant case string.
 */
export function CamelCaseStringToConstantCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `_${match}`).toUpperCase();
}
