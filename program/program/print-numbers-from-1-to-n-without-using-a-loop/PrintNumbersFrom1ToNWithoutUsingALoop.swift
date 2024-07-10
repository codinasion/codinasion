import Swift
import Foundation

func printNumber(original:Int, n: Int) -> Int {
   print(original - n)
   if(n == 0) {
     return 0
   }
   return printNumber(original: original, n: n-1)
}

var num = 15
var result1 = printNumber(original: num, n: num-1)
