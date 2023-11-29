import Foundation

/*
Description:

This Swift program performs the conversion of a decimal number to its binary representation. 
It prompts the user to input a decimal number, then utilizes a standard algorithm to carry out the conversion. 
The algorithm involves dividing the decimal number by 2, noting the remainder, and repeating this process until the quotient becomes 0. 
The binary representation is obtained by arranging the remainders in reverse order. 
The program provides a simple and interactive way for users to observe the binary equivalent of any decimal input.

Sample Input:
Enter a decimal number:
10

Sample Output:
Binary representation: 1010

*/

// Function to convert decimal to binary
func decimalToBinary(decimal: Int) -> String {
    var binaryString = ""
    var quotient = decimal
    
    while quotient > 0 {
        let remainder = quotient % 2
        binaryString.insert(contentsOf: "\(remainder)", at: binaryString.startIndex)
        quotient /= 2
    }
    
    return binaryString.isEmpty ? "0" : binaryString
}

// Main program
print("Enter a decimal number:")
if let decimalInput = readLine(), let decimal = Int(decimalInput) {
    let binaryResult = decimalToBinary(decimal: decimal)
    print("Binary representation: \(binaryResult)")
} else {
    print("Invalid input. Please enter a valid decimal number.")
}
