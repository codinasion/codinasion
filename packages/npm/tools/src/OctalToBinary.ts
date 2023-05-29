export function OctalToBinary(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only octal digits"
    );
  }

  let binary = "";
  for (let i = 0; i < octal.length; i++) {
    const decimal = parseInt(octal[i], 8);
    const binaryChunk = decimal.toString(2).padStart(3, "0");
    binary += binaryChunk;
  }
  return binary;
}
