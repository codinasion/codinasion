import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
var average = Double(numbers.reduce(0, +))/Double(numbers.count)
print("Average: ", average)
