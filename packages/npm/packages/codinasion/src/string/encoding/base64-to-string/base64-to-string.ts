/**
 * Converts a base64 encoded string to a regular string.
 *
 * @param base64Str - The base64 encoded string to convert.
 * @returns The decoded string.
 */
export function Base64ToString(base64Str: string): string {
  return atob(base64Str);
}
