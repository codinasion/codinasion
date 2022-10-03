import Foundation
import Glibc

func checkingPrimeNumber(num: Int) -> Bool{

   if(num == 1 || num == 0){
      return false
   }

   for j in 2..<num{
      if(num % j == 0){
         return false
      }
   }

   return true
}
print("Please enter lower range:")

var lowerLimit = Int(readLine()!)!
print(lowerLimit)
print("Please enter upper range:")


var upperLimit = Int(readLine()!)!
print(upperLimit)
print("Entered range is \(lowerLimit) to \(upperLimit)")
print("So following are the Prime numbers:")


for k in lowerLimit...upperLimit{


   if (checkingPrimeNumber(num: k)){

      print(k)
   }
}