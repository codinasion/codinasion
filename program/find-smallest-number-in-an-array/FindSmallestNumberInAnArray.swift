import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
print("Smallest number: ", numbers.reduce(Int.max, { min($0, $1) }))
