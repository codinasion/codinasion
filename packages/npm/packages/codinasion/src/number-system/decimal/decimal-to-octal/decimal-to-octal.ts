/**
 * Converts a decimal number to octal.
 *
 * @param decimal - The decimal number to convert.
 * @returns The octal representation of the decimal number.
 * If the input is negative or not an integer, an empty string is returned.
 */
export function DecimalToOctal(decimal: number): string {
  if (decimal < 0 || !Number.isInteger(decimal)) {
    return "";
  }
  let octal = "";
  let num = decimal;
  while (num > 0) {
    octal = (num % 8).toString() + octal;
    num = Math.floor(num / 8);
  }
  return octal || "0";
}
