/**
 * Converts a decimal number to its hexadecimal representation.
 *
 * @param decimal - The decimal number to convert.
 * @returns The hexadecimal representation of the decimal number.
 * If the input is negative or not an integer, an empty string is returned.
 */
export function DecimalToHexadecimal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let hex = "";
  let num = decimal;
  while (num > 0) {
    const remainder = num % 16;
    hex =
      (remainder < 10
        ? remainder.toString()
        : String.fromCharCode(55 + remainder)) + hex;
    num = Math.floor(num / 16);
  }
  return hex || "0";
}
