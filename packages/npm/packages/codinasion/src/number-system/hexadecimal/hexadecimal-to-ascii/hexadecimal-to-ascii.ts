/**
 * Converts a hexadecimal string to ASCII.
 *
 * @param hexadecimal - The hexadecimal string to convert.
 * @returns The ASCII representation of the hexadecimal string.
 */
export function HexadecimalToAscii(hexadecimal: string): string {
  let ascii = "";
  for (let i = 0; i < hexadecimal.length; i += 2) {
    const byte = hexadecimal.slice(i, i + 2);
    const charCode = parseInt(byte, 16);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
