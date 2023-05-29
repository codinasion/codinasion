export function HexadecimalToBinary(hex: string): string {
  if (!/^[0-9a-fA-F]+$/.test(hex)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only hexadecimal characters"
    );
  }

  let binary = "";
  for (let i = 0; i < hex.length; i++) {
    const decimal = parseInt(hex[i], 16);
    const binaryChunk = decimal.toString(2).padStart(4, "0");
    binary += binaryChunk;
  }
  return binary;
}
