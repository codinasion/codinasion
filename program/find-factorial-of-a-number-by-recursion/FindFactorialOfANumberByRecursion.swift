import Foundation
import Glibc

print("Enter number: ")
var number = Int(readLine()!)!

print("Factorial: ", factorial(fNumber: number))

func factorial(fNumber: Int) -> Int{
   if fNumber == 0{
      return 1
   } else {
      return fNumber * factorial(fNumber:fNumber-1)
   }
}
