/**
 * Converts a binary number to a hexadecimal number.
 *
 * @param binary - The binary number to convert.
 * @returns The hexadecimal representation of the binary number.
 */
export function BinaryToHexadecimal(binary: string): string {
  if (!/^[01]+$/.test(binary)) {
    return "";
  }
  let hex = "";
  let decimal = 0;
  let power = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);
    }
    power++;
    if (power === 4 || i === 0) {
      hex =
        (decimal < 10
          ? decimal.toString()
          : String.fromCharCode(55 + decimal)) + hex;
      decimal = 0;
      power = 0;
    }
  }
  return hex;
}
