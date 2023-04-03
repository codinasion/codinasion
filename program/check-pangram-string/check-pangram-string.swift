import Swift
import Foundation

func CheckPangram(str: String) -> Bool {
   let lowercaseString = str.lowercased()
   let alphabet = "abcdefghijklmnopqrstuvwxyz" 
   for l in alphabet {
      if !lowercaseString.contains(l) {
         return false
      }
   }
   return true
}

let str1 = "The quick brown fox jumps over the lazy dog"
print("'\(str1)' is pangram?:", CheckPangram(str: str1))
