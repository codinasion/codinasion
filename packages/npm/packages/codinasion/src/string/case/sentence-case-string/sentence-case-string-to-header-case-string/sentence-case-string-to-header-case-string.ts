/**
 * Converts a sentence case string to header case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The converted header case string.
 */
export function SentenceCaseStringToHeaderCaseString(str: string): string {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
