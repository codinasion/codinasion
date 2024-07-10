import Foundation

func toAlternatingCase(_ input: String) -> String {
    var result = ""
    var shouldUppercase = false

    for character in input {
        if character.isLetter {
            if shouldUppercase {
                result += character.uppercased()
            } else {
                result += character.lowercased()
            }
            shouldUppercase.toggle()
        } else {
            result += String(character)
        }
    }

    return result
}

let inputString = "hello world"
let outputString = toAlternatingCase(inputString)
print(outputString)
