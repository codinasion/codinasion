import Foundation

print("Enter number: ")
var number = Int(readLine()!)!

print("Sum of numbers: ", sum(value: number))

func sum(value: Int) -> Int{
   var output = 0
   if (value >= 1) {
      for j in 1...value{
         output = output + j
      }
   }
   return output
}
