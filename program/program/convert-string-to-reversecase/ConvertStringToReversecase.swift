func reverseCase(_ input: String) -> String {
    var result = ""
    
    for char in input {
        if char.isLowercase {
            result.append(char.uppercased())
        } else {
            result.append(char.lowercased())
        }
    }
    
    return result
}

// Take input from the user
print("Enter a string:")
if let inputString = readLine() {
    let outputString = reverseCase(inputString)
    print("Output:", outputString)
} else {
    print("Error reading input.")
}
