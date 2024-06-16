/**
 * Converts a hexadecimal number to binary.
 *
 * @param hex - The hexadecimal number to convert.
 * @returns The binary representation of the hexadecimal number.
 */
export function HexadecimalToBinary(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let binary = "";
  for (const char of hex) {
    const decimal = parseInt(char, 16);
    binary += decimal.toString(2).padStart(4, "0");
  }
  return binary;
}
