package main

import "fmt"

func findSumOfSquaresOfNumbers(arr []int) int {
   n := len(arr)
   return (n * (n + 1) * (2 * n + 1)) / 6
}

func main(){
   fmt.Println(findSumOfSquaresOfNumbers([]int{1, 2, 3, 4, 5}))
}