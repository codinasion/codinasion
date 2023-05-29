export function HexadecimalToOctal(hex: string): string {
  if (!/^[0-9a-fA-F]+$/.test(hex)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only hexadecimal characters"
    );
  }

  const decimal = parseInt(hex, 16);
  return decimal.toString(8);
}
