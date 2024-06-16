/**
 * Converts a sentence case string to kebab case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The kebab case string.
 */
export function SentenceCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}
