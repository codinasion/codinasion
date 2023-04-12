import Swift
import Foundation

let numbers = [10, 20, 30, 40, 50]
print("Maximum number: ", numbers.reduce(Int.min, { max($0, $1) }))
