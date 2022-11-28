import Foundation
import Glibc
print("enter the number in array")
let text : String = readLine()!
let arrstr = text.split(separator: " ")
var digits = [Int]()
for element in arrstr
{
    digits.append(Int(String(element))!)
}
let numbers = [1, 12, 2, 9, 27]
let total = digits.reduce(0, +)
print("sum of all numbers in array")
print(total)