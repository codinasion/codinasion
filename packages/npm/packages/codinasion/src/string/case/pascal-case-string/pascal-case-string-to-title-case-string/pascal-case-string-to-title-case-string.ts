/**
 * Converts a PascalCase string to title case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The title case string.
 */
export function PascalCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, " $1")
    .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase())
    .trim()
    .replace(/ +/g, " ");
}
