/**
 * Converts a decimal number to its corresponding ASCII character.
 *
 * @param decimal - The decimal number to convert.
 * @returns The ASCII character corresponding to the decimal number. Returns an empty string if the decimal number is out of range (0-255).
 */
export function DecimalToAscii(decimal: number): string {
  if (decimal < 0 || decimal > 255) {
    return "";
  }
  return String.fromCharCode(decimal);
}
