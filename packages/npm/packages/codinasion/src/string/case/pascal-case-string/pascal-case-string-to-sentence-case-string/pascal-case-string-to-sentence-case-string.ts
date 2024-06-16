/**
 * Converts a PascalCase string to a sentence case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted sentence case string.
 */
export function PascalCaseStringToSentenceCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}
