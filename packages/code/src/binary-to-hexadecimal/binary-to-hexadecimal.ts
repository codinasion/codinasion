export function binaryToHexadecimal(binaryStr: string): string {
  // Validate the input
  if (!/^[01]+$/.test(binaryStr)) {
    throw new Error("Invalid binary string");
  }

  // Pad the binary string to ensure its length is a multiple of 4
  const paddedBinaryStr = binaryStr.padStart(Math.ceil(binaryStr.length / 4) * 4, '0');

  let hexStr = '';
  const binaryToHexMap: { [key: string]: string } = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F'
  };

  // Convert binary to hexadecimal
  for (let i = 0; i < paddedBinaryStr.length; i += 4) {
    const binaryChunk = paddedBinaryStr.slice(i, i + 4);
    hexStr += binaryToHexMap[binaryChunk];
  }

  return hexStr;
}
