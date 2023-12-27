/**
 * Converts a lower case string to Pascal case string.
 *
 * @param str - The lower case string to convert.
 * @returns The Pascal case string.
 */
export function LowerCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .replace(/\s/g, "");
}
