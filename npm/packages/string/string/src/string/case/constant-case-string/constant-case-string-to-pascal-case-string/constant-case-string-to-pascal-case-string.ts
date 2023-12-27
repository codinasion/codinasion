/**
 * Converts a constant case string to a pascal case string.
 *
 * @param str - The constant case string to convert.
 * @returns The pascal case string.
 */
export function ConstantCaseStringToPascalCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  }
  return str;
}
