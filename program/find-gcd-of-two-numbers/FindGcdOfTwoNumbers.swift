import Swift
import Foundation

func findGCD(num1: Int, num2: Int) -> Int {
   var x = 0

   var y: Int = max(num1, num2)
   var z: Int = min(num1, num2)

   while z != 0 {
      x = y
      y = z
      z = x % y
   }
   return y
}

var result = findGCD(num1:12, num2:18)
print("GCD: ", result)
