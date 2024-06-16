/**
 * Converts a sentence case string to Pascal case string.
 *
 * @param str - The sentence case string to convert.
 * @returns The Pascal case string.
 */
export function SentenceCaseStringToPascalCaseString(str: string): string {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
