/**
 * Converts a decimal number to its binary representation.
 *
 * @param decimal - The decimal number to convert.
 * @returns The binary representation of the decimal number.
 * If the decimal number is negative or not an integer, an empty string is returned.
 */
export function DecimalToBinary(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let binary = "";
  let num = decimal;
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary || "0";
}
