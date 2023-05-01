import Swift
import Foundation

func secondlargestNumber(a:[Int])->Int{
   var arr = a
    
   for x in 0..<arr.count{
      for y in x+1..<arr.count{
         if (arr[x]>arr[y]) {
            let t = arr[x]
            arr[x] = arr[y]
            arr[y] = t
         }
      } 
   }
   return arr[arr.count-2]
}

var arr = [1, 2, 3, 4, 5]

print("Second Largest Number: ", secondlargestNumber(a:arr))
