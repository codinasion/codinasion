/**
 * Converts a path case string to a Pascal case string.
 *
 * @param str - The path case string to convert.
 * @returns The Pascal case string.
 */
export function PathCaseStringToPascalCaseString(str: string): string {
  return str
    .split("/")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}
