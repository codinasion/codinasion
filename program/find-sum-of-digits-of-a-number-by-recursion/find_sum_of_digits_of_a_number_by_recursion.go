package main

import "fmt"

func sumRecursive(nums int) int {
	if (nums == 0) {
		return 0
	}
	return nums % 10 + sumRecursive(nums / 10)
}

func main() {
	var i int
	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)
	fmt.Println(sumRecursive(i))
}
