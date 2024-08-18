export function binaryToOctal(binaryStr: string): string {
  // Validate the input
  if (!/^[01]+$/.test(binaryStr)) {
    throw new Error("Invalid binary string");
  }

  // Pad the binary string to ensure its length is a multiple of 3
  const paddedBinaryStr = binaryStr.padStart(
    Math.ceil(binaryStr.length / 3) * 3,
    "0",
  );

  let octalStr = "";
  const binaryToOctalMap: { [key: string]: string } = {
    "000": "0",
    "001": "1",
    "010": "2",
    "011": "3",
    "100": "4",
    "101": "5",
    "110": "6",
    "111": "7",
  };

  // Convert binary to octal
  for (let i = 0; i < paddedBinaryStr.length; i += 3) {
    const binaryChunk = paddedBinaryStr.slice(i, i + 3);
    octalStr += binaryToOctalMap[binaryChunk];
  }

  return octalStr;
}
