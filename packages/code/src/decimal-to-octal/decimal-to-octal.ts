export function decimalToOctal(decimal: number): string {
  if (decimal === 0) {
    return "0";
  }

  let octal = "";
  let num = decimal;

  while (num > 0) {
    octal = (num % 8) + octal;
    num = Math.floor(num / 8);
  }

  return octal;
}
