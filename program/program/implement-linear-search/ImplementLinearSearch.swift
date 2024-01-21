import Foundation

func linearSearch(_ list: [Int], _ value: Int) -> Int? {
    for (index, item) in list.enumerated() {
        if item == value {
            return index
        }
    }
    return nil
}

// Function to read a line of input and convert it to an integer array
func readIntArray() -> [Int] {
    let input = readLine() ?? ""
    return input.split(separator: " ").compactMap { Int($0) }
}

// Read the list of numbers from the user
print("Enter a list of numbers separated by spaces:")
let numbers = readIntArray()

// Read the value to search for
print("Enter the number to search for:")
guard let valueToSearch = Int(readLine() ?? "") else {
    print("Invalid input for the number to search for.")
    exit(1)
}

// Perform linear search
if let foundIndex = linearSearch(numbers, valueToSearch) {
    print("Value \(valueToSearch) found at index \(foundIndex)")
} else {
    print("Value \(valueToSearch) not found in the list")
}
