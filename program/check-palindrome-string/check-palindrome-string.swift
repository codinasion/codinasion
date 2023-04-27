import Swift
import Foundation

func checkPalindrome(str: String) -> Bool {
   var reversedString = String(str.reversed())
   return str == reversedString
}

var str1 = "abba"
var result1 = checkPalindrome(str: str1)
print("Is String - \(str1) is palindrome?:", result1) 

var str2 = "abba123"
var result2 = checkPalindrome(str: str2)
print("Is String - \(str2) is palindrome?:", result2) 
