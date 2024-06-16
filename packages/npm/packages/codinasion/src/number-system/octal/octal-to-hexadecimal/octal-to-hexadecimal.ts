/**
 * Converts a given octal number to its hexadecimal representation.
 *
 * @param octal - The octal number to be converted.
 * @returns The hexadecimal representation of the octal number.
 *          Returns an empty string if the input is not a valid octal number.
 */
export function OctalToHexadecimal(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    return "";
  }
  let decimal = 0;
  for (const digit of octal) {
    decimal = decimal * 8 + parseInt(digit, 8);
  }
  return decimal.toString(16).toUpperCase();
}
