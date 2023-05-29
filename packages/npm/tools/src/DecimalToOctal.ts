export function DecimalToOctal(decimal: number): string {
  if (isNaN(decimal) || decimal < 0) {
    return "";
  }

  return decimal.toString(8);
}
