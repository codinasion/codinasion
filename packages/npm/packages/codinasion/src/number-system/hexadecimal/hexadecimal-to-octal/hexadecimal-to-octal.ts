/**
 * Converts a hexadecimal number to octal.
 *
 * @param hex - The hexadecimal number to convert.
 * @returns The octal representation of the hexadecimal number.
 * If the input is not a valid hexadecimal number, an empty string is returned.
 */
export function HexadecimalToOctal(hex: string): string {
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    return "";
  }
  let decimal = 0;
  for (const hexDigit of hex) {
    const digit = parseInt(hexDigit, 16);
    decimal = decimal * 16 + digit;
  }
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8).toString() + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal || "0";
}
