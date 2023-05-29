export function OctalToHexadecimal(octal: string): string {
  if (!/^[0-7]+$/.test(octal)) {
    throw new Error(
      "Invalid input: must be a non-empty string containing only octal digits"
    );
  }

  const decimal = parseInt(octal, 8);
  return decimal.toString(16).toUpperCase();
}
