/**
 * Converts a camel case string to an upper case string.
 *
 * @param str - The camel case string to convert.
 * @returns The converted upper case string.
 */
export function CamelCaseStringToUpperCaseString(str: string): string {
  return str.replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1 $2").toUpperCase();
}
