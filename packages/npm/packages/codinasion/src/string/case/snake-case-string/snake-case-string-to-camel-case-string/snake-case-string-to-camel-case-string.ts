/**
 * Converts a snake case string to camel case string.
 *
 * @param str - The snake case string to convert.
 * @returns The camel case string.
 */
export function SnakeCaseStringToCamelCaseString(str: string): string {
  return str.replace(/_(?<temp1>[a-z])/g, (match: string, letter: string) =>
    letter.toUpperCase(),
  );
}
