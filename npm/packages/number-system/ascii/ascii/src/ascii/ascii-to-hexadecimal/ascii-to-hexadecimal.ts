/**
 * Converts ASCII characters to hexadecimal representation.
 *
 * @param ascii - The ASCII string to convert.
 * @returns The hexadecimal representation of the ASCII string.
 */
export function AsciiToHexadecimal(ascii: string): string {
  let hexadecimal = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    hexadecimal += charCode.toString(16).padStart(2, "0");
  }
  return hexadecimal.toUpperCase();
}
