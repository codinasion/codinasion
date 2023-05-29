export function BinaryToHexadecimal(binary: string): string {
  if (!/^[01]+$/.test(binary)) {
    return "";
  }

  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, binary.length - i - 1);
  }

  return decimal.toString(16);
}
