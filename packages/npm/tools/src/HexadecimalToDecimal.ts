export function HexadecimalToDecimal(hex: string): number {
  if (!/^[0-9a-fA-F]+$/.test(hex)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only hexadecimal characters"
    );
  }

  return parseInt(hex, 16);
}
