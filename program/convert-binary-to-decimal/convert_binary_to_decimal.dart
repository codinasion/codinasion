int convertBinaryToDecimal(int binary) {
  int binaryNumber = int.parse(binary.toString(), radix: 2);
  return binaryNumber;
}
