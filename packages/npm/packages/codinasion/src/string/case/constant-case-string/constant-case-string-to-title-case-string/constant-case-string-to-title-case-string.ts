/**
 * Converts a constant case string to title case string.
 *
 * @param str - The constant case string to convert.
 * @returns The title case string.
 */
export function ConstantCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
