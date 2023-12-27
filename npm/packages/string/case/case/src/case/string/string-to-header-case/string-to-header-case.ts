/**
 * Converts a string to header case.
 *
 * @param str - The input string to convert.
 * @returns The converted string in header case.
 */
export function StringToHeaderCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const headerWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return headerWords.join("-");
}
