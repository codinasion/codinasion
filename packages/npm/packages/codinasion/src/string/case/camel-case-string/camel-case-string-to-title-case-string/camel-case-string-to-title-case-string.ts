/**
 * Converts a camel case string to title case string.
 *
 * @param str - The camel case string to convert.
 * @returns The title case string.
 */
export function CamelCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/(?<temp2>[a-z])(?<temp1>[A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
