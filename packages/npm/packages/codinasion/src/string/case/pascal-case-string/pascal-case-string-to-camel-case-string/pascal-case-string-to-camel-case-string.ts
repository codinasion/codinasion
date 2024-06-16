/**
 * Converts a PascalCase string to a camelCase string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The camelCase string.
 */
export function PascalCaseStringToCamelCaseString(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
