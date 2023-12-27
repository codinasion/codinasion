/**
 * Converts a path-case string to camelCase string.
 *
 * @param str - The path-case string to convert.
 * @returns The camelCase string.
 */
export function PathCaseStringToCamelCaseString(str: string): string {
  if (!str.includes("/")) {
    return str;
  }
  return str
    .toLowerCase()
    .replace(/\/(?<temp1>.)/g, (_, char) => (char as string).toUpperCase());
}
