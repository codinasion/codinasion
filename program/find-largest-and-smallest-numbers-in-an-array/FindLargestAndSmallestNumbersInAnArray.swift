import Swift
import Foundation

let numbers = [1, 2, 3, 4, 5]
print("Largest number: ", numbers.reduce(Int.min, { max($0, $1) }))
print("Smallest number: ", numbers.reduce(Int.max, { min($0, $1) }))
