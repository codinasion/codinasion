/**
 * Converts each character of the given ASCII string to its corresponding decimal value.
 * @param ascii - The ASCII string to convert.
 * @returns An array of decimal values representing each character of the ASCII string.
 */
export function AsciiToDecimal(ascii: string): number[] {
  const decimalArray: number[] = [];
  for (let i = 0; i < ascii.length; i++) {
    const charCode = ascii.charCodeAt(i);
    decimalArray.push(charCode);
  }
  return decimalArray;
}
