import Swift
import Foundation

print("Enter number: ")
var tablenumber = Int(readLine()!)!
print("Enter range: ")
var tableRange = Int(readLine()!)!

print("Multiplication table of \(tablenumber): ")
for j in 1...tableRange{
	print("\(tablenumber) * \(j) = \(tablenumber * j)")
}
