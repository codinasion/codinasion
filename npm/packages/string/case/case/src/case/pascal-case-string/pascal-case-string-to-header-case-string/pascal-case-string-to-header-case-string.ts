/**
 * Converts a PascalCase string to a header case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted header case string.
 */
export function PascalCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/(?<temp1>[A-Z])/g, "-$1")
    .replace(/^-/, "")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("-")
    .replace(/--/g, "-");
}
