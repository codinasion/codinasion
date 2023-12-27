/**
 * Converts a PascalCase string to an upper case string.
 * If the input string is already in upper case, it returns the same string.
 * Otherwise, it converts the string to upper case and adds spaces before each capital letter.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted upper case string.
 */
export function PascalCaseStringToUpperCaseString(str: string): string {
  return str === str.toUpperCase()
    ? str
    : str
        .replace(/(?<temp1>[A-Z])/g, " $1")
        .toUpperCase()
        .trim();
}
