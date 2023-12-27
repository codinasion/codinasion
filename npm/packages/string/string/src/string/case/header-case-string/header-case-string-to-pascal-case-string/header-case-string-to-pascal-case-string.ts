/**
 * Converts a header case string to a Pascal case string.
 *
 * @param str - The header case string to convert.
 * @returns The converted Pascal case string.
 */
export function HeaderCaseStringToPascalCaseString(str: string): string {
  if (str.includes("-")) {
    return str
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
