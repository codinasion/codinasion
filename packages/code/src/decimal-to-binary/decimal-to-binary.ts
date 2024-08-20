export function decimalToBinary(decimal: number): string {
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  let num = decimal;

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
}
