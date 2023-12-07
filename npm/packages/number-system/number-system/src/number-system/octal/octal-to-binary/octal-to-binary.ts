/**
 * Converts an octal number to binary.
 *
 * @param octal - The octal number to convert.
 * @returns The binary representation of the octal number.
 */
export function OctalToBinary(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    return "";
  }
  let binary = "";
  for (const digit of octal) {
    const decimal = parseInt(digit, 8);
    binary += decimal.toString(2).padStart(3, "0");
  }
  return binary;
}
