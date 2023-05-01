import Swift
import Foundation

func printNumber(n: Int) -> Int {
   print(n)
   if(n == 1) {
     return 1
   }
   return printNumber(n: n-1)
}

var num = 5
var result1 = printNumber(n: num)
