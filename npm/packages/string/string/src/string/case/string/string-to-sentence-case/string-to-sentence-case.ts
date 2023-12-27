/**
 * Converts a string to sentence case.
 *
 * @param str - The input string to convert.
 * @returns The converted string in sentence case.
 */
export function StringToSentenceCase(str: string): string {
  if (str.length === 0) {
    return "";
  }

  const sentence = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return sentence;
}
