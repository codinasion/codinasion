/**
 * Converts a title case string to a Pascal case string.
 *
 * @param str - The title case string to convert.
 * @returns The Pascal case string.
 */
export function TitleCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\s+/g, "")
    .replace(/^(?<temp1>.)/, (match) => match.toUpperCase());
}
