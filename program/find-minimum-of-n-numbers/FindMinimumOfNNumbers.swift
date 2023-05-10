import Swift
import Foundation

let numbers = [10, 20, 30, 40, 50]
print("Minimum number: ", numbers.reduce(Int.max, { min($0, $1) }))
