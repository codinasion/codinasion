/**
 * Converts a string to constant case.
 *
 * @param str - The string to convert.
 * @returns The converted string in constant case.
 */
export function StringToConstantCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const upperWords = words.map((word) => word.toUpperCase());
  return upperWords.join("_");
}
