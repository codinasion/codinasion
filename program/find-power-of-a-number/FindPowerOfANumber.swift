import Swift
import Foundation

print("Enter number: ")
var number = Int(readLine()!)!

print("Enter power: ")
var power = Int(readLine()!)!

var result = 1
for val in 1...power {
  result = result * number
}

print("Result: ", result)
