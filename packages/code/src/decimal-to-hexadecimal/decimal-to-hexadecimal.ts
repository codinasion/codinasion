export function decimalToHexadecimal(decimal: number): string {
  if (decimal === 0) {
    return "0";
  }

  const hexDigits = "0123456789ABCDEF";
  let hex = "";
  let num = decimal;

  while (num > 0) {
    hex = hexDigits[num % 16] + hex;
    num = Math.floor(num / 16);
  }

  return hex;
}
