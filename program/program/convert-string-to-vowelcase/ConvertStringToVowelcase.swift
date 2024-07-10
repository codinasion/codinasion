func convertToVowelCase(_ input: String) -> String {
    let vowels: Set<Character> = ["a", "e", "i", "o", "u"]
    
    let result = input.map { char -> Character in
        if vowels.contains(char.lowercased().first ?? Character("")) {
            return char.uppercased().first ?? char
        } else {
            return char.lowercased().first ?? char
        }
    }
    
    return String(result)
}

// Example usage
let inputString = "hello world"
let result = convertToVowelCase(inputString)
//print(inputString)
print("Input: \(inputString)")
print("Output: \(result)")
