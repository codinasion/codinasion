import Swift
import Foundation

var myArray : [Int] = [1,2,3,4,5]
var arraySum = myArray.reduce(0, +)
var length = myArray.count
var average = Double(arraySum)/Double(length)

print("Array:", myArray)
print("Average:", average)
