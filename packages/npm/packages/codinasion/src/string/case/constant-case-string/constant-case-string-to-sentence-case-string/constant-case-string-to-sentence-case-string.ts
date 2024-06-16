/**
 * Converts a constant case string to sentence case string.
 *
 * @param str - The constant case string to convert.
 * @returns The converted sentence case string.
 */
export function ConstantCaseStringToSentenceCaseString(str: string): string {
  if (str.includes("_")) {
    return str
      .toLowerCase()
      .split("_")
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase(),
      )
      .join(" ");
  }
  return str;
}
