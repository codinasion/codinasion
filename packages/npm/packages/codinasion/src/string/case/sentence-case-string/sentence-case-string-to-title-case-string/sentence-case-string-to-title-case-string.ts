/**
 * Converts a sentence case string to title case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The title case string.
 */
export function SentenceCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}
