package main

import "fmt"

func findSumOfSquaresOfNumbers(arr []int) int {
   sum := 0
   for e := range arr {
      sum += e * e
   }
   return sum
}

func main(){
   fmt.Println(findSumOfSquaresOfNumbers([]int{1, 2, 3, 4, 5}))
}