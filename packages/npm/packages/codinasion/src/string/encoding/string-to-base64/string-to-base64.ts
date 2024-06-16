/**
 * Converts a string to its Base64 representation.
 *
 * @param str - The string to be converted.
 * @returns The Base64 representation of the input string.
 */
export function StringToBase64(str: string): string {
  return btoa(str);
}
