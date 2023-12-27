/**
 * Converts a kebab-case string to sentence case string.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted sentence case string.
 */
export function KebabCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/-/g, " ").replace(/^\w/, (match) => match.toUpperCase());
}
