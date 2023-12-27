/**
 * Converts a camel case string to a path case string.
 *
 * @param str - The camel case string to convert.
 * @returns The path case string.
 */
export function CamelCaseStringToPathCaseString(str: string): string {
  return str.replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1/$2").toLowerCase();
}
