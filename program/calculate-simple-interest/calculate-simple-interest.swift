import Swift
import Foundation

print("Enter principal: ")
var principal = Int(readLine()!)!
print("Enter rate: ")
var rate = Int(readLine()!)!
print("Enter time: ")
var time = Int(readLine()!)!
print("Simple Interest: ", (principal * rate * time)/100)
