/**
 * Converts a camel case string to snake case string.
 *
 * @param str - The camel case string to convert.
 * @returns The snake case string.
 */
export function CamelCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1_$2").toLowerCase();
}
