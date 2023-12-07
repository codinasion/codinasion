/**
 * Converts a hexadecimal number to decimal.
 *
 * @param hex - The hexadecimal number to convert.
 * @returns The decimal representation of the hexadecimal number. Returns NaN if the input is not a valid hexadecimal number.
 */
export function HexadecimalToDecimal(hex: string): number {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return NaN;
  }
  let decimal = 0;
  for (const char of hex) {
    const digit = parseInt(char, 16);
    decimal = decimal * 16 + digit;
  }
  return decimal;
}
