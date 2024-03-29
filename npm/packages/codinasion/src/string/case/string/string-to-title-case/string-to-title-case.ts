/**
 * Converts a string to title case.
 *
 * @param str - The string to convert.
 * @returns The converted string in title case.
 */
export function StringToTitleCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const words = str.split(/[\s_-]+/);
  const titleWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return titleWords.join(" ");
}
