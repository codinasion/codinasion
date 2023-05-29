import Swift
import Foundation

let characterset = CharacterSet(charactersIn:
   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
)
let givenCharacter = "@"

if givenCharacter.rangeOfCharacter(from: characterset.inverted) != nil {
   print("Special Character")
} else {
  print("Not a Special Character")
}
