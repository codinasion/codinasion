/**
 * Converts a lower case string to camel case string.
 *
 * @param str - The lower case string to convert.
 * @returns The camel case string.
 */
export function LowerCaseStringToCamelCaseString(str: string): string {
  return str.replace(/ (?<temp1>[a-z])/g, (match: string, group1: string) =>
    group1.toUpperCase(),
  );
}
