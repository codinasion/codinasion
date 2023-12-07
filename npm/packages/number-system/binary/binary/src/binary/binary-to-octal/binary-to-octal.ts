/**
 * Converts a binary number to octal.
 *
 * @param binary - The binary number to convert.
 * @returns The octal representation of the binary number.
 */
export function BinaryToOctal(binary: string): string {
  if (!/^[01]+$/.test(binary)) {
    return "";
  }
  let octal = "";
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
    if (power === 3 || i === 0) {
      octal = decimal.toString() + octal;
      decimal = 0;
      power = 0;
    }
  }
  return octal;
}
