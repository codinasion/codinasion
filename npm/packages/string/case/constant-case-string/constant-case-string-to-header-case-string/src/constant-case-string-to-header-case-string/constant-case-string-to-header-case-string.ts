/**
 * Converts a constant case string to header case string.
 *
 * @param str - The constant case string to convert.
 * @returns The converted header case string.
 */
export function ConstantCaseStringToHeaderCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
