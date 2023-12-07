/**
 * Converts ASCII characters to octal representation.
 *
 * @param ascii - The ASCII characters to convert.
 * @returns The octal representation of the ASCII characters.
 */
export function AsciiToOctal(ascii: string): string {
  let octal = "";
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    octal += charCode.toString(8).padStart(3, "0");
  }
  return octal;
}
