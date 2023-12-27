/**
 * Converts a constant case string to camel case string.
 *
 * @param str - The constant case string to convert.
 * @returns The camel case string.
 */
export function ConstantCaseStringToCamelCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .replace(/_(?<temp1>[a-z])/g, (match: string, char: string) =>
        char.toUpperCase(),
      );
  }
  return str;
}
