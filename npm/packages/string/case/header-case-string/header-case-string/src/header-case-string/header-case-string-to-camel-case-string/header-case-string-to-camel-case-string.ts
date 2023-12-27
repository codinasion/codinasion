/**
 * Converts a string in header case to camel case.
 *
 * @param str - The string to convert.
 * @returns The converted camel case string.
 */
export function HeaderCaseStringToCamelCaseString(str: string): string {
  if (str.includes("-")) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }
  return str;
}
