/**
 * Converts a PascalCase string to a CONSTANT_CASE string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The converted CONSTANT_CASE string.
 */
export function PascalCaseStringToConstantCaseString(str: string): string {
  if (str === str.toUpperCase()) {
    return str;
  }
  const result = str.replace(/(?<temp1>[A-Z])/g, "_$1").toUpperCase();
  if (result.startsWith("_")) {
    return result.substring(1);
  }
  return result;
}
