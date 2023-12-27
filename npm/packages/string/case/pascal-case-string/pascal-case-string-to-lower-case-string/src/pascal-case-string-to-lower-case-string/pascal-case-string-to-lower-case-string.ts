/**
 * Converts a PascalCase string to a lower case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted lower case string.
 */
export function PascalCaseStringToLowerCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .toLowerCase();
}
