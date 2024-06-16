/**
 * Converts a snake case string to sentence case string.
 *
 * @param str - The snake case string to convert.
 * @returns The converted sentence case string.
 */
export function SnakeCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}
