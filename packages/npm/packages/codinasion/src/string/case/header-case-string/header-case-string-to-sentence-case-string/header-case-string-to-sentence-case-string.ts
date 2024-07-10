/**
 * Converts a string in header case to sentence case.
 *
 * @param str - The string to convert.
 * @returns The converted string in sentence case.
 */
export function HeaderCaseStringToSentenceCaseString(str: string): string {
  if (str.includes("-")) {
    return str
      .split("-")
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
      })
      .join(" ");
  }
  return str;
}
