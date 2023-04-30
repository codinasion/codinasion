import Swift
import Foundation

print("Enter a number")
var number = Int(readLine()!)!
var reverseNum = 0

print("Original number: ", number)

while(number != 0){
   reverseNum = reverseNum * 10
   reverseNum = reverseNum + number % 10
   number = number/10
}
print("Reversed number: ", reverseNum)
