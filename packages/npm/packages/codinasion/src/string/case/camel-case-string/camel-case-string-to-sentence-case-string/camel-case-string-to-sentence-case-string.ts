/**
 * Converts a camel case string to sentence case string.
 *
 * @param str - The camel case string to convert.
 * @returns The converted sentence case string.
 */
export function CamelCaseStringToSentenceCaseString(str: string): string {
  const result = str
    .replace(/(?<temp1>[A-Z])/g, " $1")
    .toLowerCase()
    .trim();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
