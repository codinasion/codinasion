/**
 * Converts a PascalCase string to a path case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted path case string.
 */
export function PascalCaseStringToPathCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "/$1")
    .toLowerCase()
    .replace(/^\//, "");
}
