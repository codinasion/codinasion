/**
 * Converts a dot-case string to camelCase string.
 *
 * @param str - The dot-case string to convert.
 * @returns The camelCase string.
 */
export function DotCaseStringToCamelCaseString(str: string): string {
  return str.replace(/\.(?<temp1>\w)/g, (match: string, char: string) =>
    char.toUpperCase(),
  );
}
