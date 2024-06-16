/**
 * Converts an octal number to decimal.
 *
 * @param octal - The octal number to convert.
 * @returns The decimal representation of the octal number. Returns NaN if the input is not a valid octal number.
 */
export function OctalToDecimal(octal: string): number {
  if (!/^[0-7]+$/.test(octal)) {
    return NaN;
  }
  let decimal = 0;
  for (const digitChar of octal) {
    const digit = parseInt(digitChar, 8);
    decimal = decimal * 8 + digit;
  }
  return decimal;
}
