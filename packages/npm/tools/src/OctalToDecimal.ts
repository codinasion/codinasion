export function OctalToDecimal(octal: string): number {
  if (!/^[0-7]+$/.test(octal)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only octal digits"
    );
  }

  return parseInt(octal, 8);
}
