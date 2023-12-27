/**
 * Converts a camel case string to dot case string.
 * @param str - The camel case string to convert.
 * @returns The dot case string.
 */
export function CamelCaseStringToDotCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `.${match.toLowerCase()}`);
}
