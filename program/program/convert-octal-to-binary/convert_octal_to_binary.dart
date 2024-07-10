import 'dart:io';

void main() {
  // Prompt the user to enter an octal number
  stdout.write("Enter an octal number: ");
  String octalInput = stdin.readLineSync() ?? "";
  
  try {
    // Parse the octal input as an integer
    int decimalNumber = int.parse(octalInput, radix: 8);
    
    // Convert the decimal number to binary
    String binaryResult = decimalToBinary(decimalNumber);
    
    // Display the binary result
    print("Binary equivalent: $binaryResult");
  } catch (e) {
    print("Invalid input. Please enter a valid octal number.");
  }
}

String decimalToBinary(int decimalNumber) {
  // Convert decimal to binary using bitwise shift
  String binaryResult = "";
  
  while (decimalNumber > 0) {
    binaryResult = (decimalNumber % 2).toString() + binaryResult;
    decimalNumber ~/= 2;
  }
  
  return binaryResult;
}
