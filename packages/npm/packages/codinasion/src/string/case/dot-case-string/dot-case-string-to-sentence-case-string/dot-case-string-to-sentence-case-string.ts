/**
 * Converts a dot-case string to sentence case string.
 *
 * @param str - The dot-case string to convert.
 * @returns The converted sentence case string.
 */
export function DotCaseStringToSentenceCaseString(str: string): string {
  if (str.includes(".")) {
    return str
      .toLowerCase()
      .split(".")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase(),
      )
      .join(" ");
  }
  return str;
}
