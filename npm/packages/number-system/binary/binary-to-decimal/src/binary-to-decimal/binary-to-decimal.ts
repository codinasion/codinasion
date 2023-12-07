/**
 * Converts a binary number to decimal.
 *
 * @param binary - The binary number to convert.
 * @returns The decimal representation of the binary number. Returns NaN if the input is not a valid binary number.
 */
export function BinaryToDecimal(binary: string): number {
  if (!/^[01]+$/.test(binary)) {
    return NaN;
  }
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
}
