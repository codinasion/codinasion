import Foundation
/*
This Swift program computes the smallest element in a matrix entered by the user. 
The user is prompted to specify the number of rows and columns for the matrix and then input all matrix elements in a single row, separated by spaces. 
The program validates the input, constructs the matrix, and calculates the smallest element within it. Upon completion, the program immediately displays the smallest element found.
This straightforward implementation serves as an example of user-input handling, matrix creation, and basic element processing in Swift.

Sample Input:
Enter the number of rows:
2
Enter the number of columns:
3
Enter all elements of the matrix separated by spaces:
4 7 3 9 4 2

Sample Output:
Smallest Element in the Matrix: 2

*/

// Function to find the smallest element in a matrix
func findSmallestElement(matrix: [[Int]]) -> Int? {
    guard let firstRow = matrix.first, !firstRow.isEmpty else {
        return nil
    }

    var smallest = firstRow[0]

    for row in matrix {
        for element in row {
            if element < smallest {
                smallest = element
            }
        }
    }

    return smallest
}

// Read the number of rows and columns
print("Enter the number of rows:")
guard let rows = Int(readLine() ?? ""), rows > 0 else {
    print("Invalid input for the number of rows.")
    exit(1)
}

print("Enter the number of columns:")
guard let columns = Int(readLine() ?? ""), columns > 0 else {
    print("Invalid input for the number of columns.")
    exit(1)
}

// Read all matrix elements in a single row
print("Enter all elements of the matrix separated by spaces:")
guard let input = readLine(), !input.isEmpty else {
    print("Invalid input for matrix elements.")
    exit(1)
}

// Parse the input and create the matrix
let elements = input.components(separatedBy: " ").compactMap { Int($0) }
guard elements.count == rows * columns else {
    print("Invalid number of elements.")
    exit(1)
}

var matrix = [[Int]]()
for i in 0..<rows {
    matrix.append(Array(elements[i * columns..<(i + 1) * columns]))
}

// Find and print the smallest element
if let smallestElement = findSmallestElement(matrix: matrix) {
    print("Smallest Element in the Matrix: \(smallestElement)")
} else {
    print("The matrix is empty.")
}
