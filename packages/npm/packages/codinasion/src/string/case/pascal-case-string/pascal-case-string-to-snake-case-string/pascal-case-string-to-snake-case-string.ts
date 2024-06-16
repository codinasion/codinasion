/**
 * Converts a PascalCase string to a snake_case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted snake_case string.
 */
export function PascalCaseStringToSnakeCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
}
