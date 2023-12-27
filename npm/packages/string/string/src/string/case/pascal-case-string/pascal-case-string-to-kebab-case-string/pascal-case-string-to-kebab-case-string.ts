/**
 * Converts a PascalCase string to kebab-case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The kebab-case string.
 */
export function PascalCaseStringToKebabCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}
