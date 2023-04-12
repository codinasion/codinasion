import Swift
import Foundation

print("Please enter the letter:")
let given = String(readLine()!)
let consonants = "bcdfghijklmnpqrtvwxyz"

if consonants.contains(given) {
  print(given + " is consonant")
} else {
  print(given + " is not a consonant")
}
