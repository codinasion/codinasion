/**
 * Converts a kebab-case string to header-case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted header-case string.
 */
export function KebabCaseStringToHeaderCaseString(str: string): string {
  const result = str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
  return result.replace(/ /g, "-");
}
