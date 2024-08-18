export function binaryToDecimal(binaryStr: string): number {
  // Validate the input
  if (!/^[01]+$/.test(binaryStr)) {
    throw new Error("Invalid binary string");
  }

  let decimal = 0;
  const length = binaryStr.length;

  // Convert binary to decimal
  for (let i = 0; i < length; i++) {
    const bit = binaryStr[length - 1 - i];
    if (bit === "1") {
      decimal += Math.pow(2, i);
    }
  }

  return decimal;
}
