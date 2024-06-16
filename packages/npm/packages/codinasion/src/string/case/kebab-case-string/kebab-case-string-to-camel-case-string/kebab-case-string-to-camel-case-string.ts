/**
 * Converts a kebab-case string to camelCase string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The camelCase string.
 */
export function KebabCaseStringToCamelCaseString(str: string): string {
  return str.replace(/-(?<temp1>[a-z])/g, (match: string, group1: string) =>
    group1.toUpperCase(),
  );
}
