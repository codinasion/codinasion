/**
 * Converts a PascalCase string to dot case string.
 *
 * @param str - The PascalCase string to convert.
 * @returns The dot case string.
 */
export function PascalCaseStringToDotCaseString(str: string): string {
  const result = str.replace(/(?<temp1>[A-Z])/g, ".$1").toLowerCase();
  if (result.startsWith(".")) {
    return result.substring(1);
  }
  return result;
}
