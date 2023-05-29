import Foundation
import Glibc

print("Enter number: ")
var number = Int(readLine()!)!

print("Factorial: ", factorial(fNumber: number))

func factorial(fNumber: Int) -> Int{
   var output = 1

   if (fNumber > 1) {
      for j in 1...fNumber{
         output *= j
      }
   }
   return output
}
