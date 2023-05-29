export function DecimalToBinary(decimal: number): string {
  if (isNaN(decimal) || decimal < 0) {
    return "";
  }

  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary || "0";
}
