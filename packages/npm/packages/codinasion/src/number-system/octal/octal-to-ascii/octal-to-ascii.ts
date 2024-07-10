/**
 * Converts an octal string to ASCII characters.
 *
 * @param octal - The octal string to convert.
 * @returns The ASCII representation of the octal string.
 */
export function OctalToAscii(octal: string): string {
  let ascii = "";
  for (let i = 0; i < octal.length; i += 3) {
    const byte = octal.slice(i, i + 3);
    const charCode = parseInt(byte, 8);
    ascii += String.fromCharCode(charCode);
  }
  return ascii;
}
