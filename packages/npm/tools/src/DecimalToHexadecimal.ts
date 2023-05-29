export function DecimalToHexadecimal(decimal: number): string {
  if (isNaN(decimal) || decimal < 0) {
    return "";
  }

  return decimal.toString(16);
}
