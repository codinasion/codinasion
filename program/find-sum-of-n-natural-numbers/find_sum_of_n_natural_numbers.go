package main

import "fmt"

func sumOfNumbers(nums int) int {
	return nums * (nums+1) / 2
}

func main() {
	var i int
	fmt.Print("Input Number: ")
	fmt.Scan(&i)
	fmt.Println(sumOfNumbers(i))
}
