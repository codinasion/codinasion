import Swift
import Foundation

let initialString = "helloworld"
let vowelString = "aeiouAEIOU"
var result = ""

for char in initialString {
  if vowelString.contains(char) {
    result += char.lowercased()
  } else {
    result += char.uppercased()
  }
}

print(result)
