package main

import "fmt"

func printNumbers(nums int) {
	if (nums <= 0) {
		return
	}
	printNumbers(nums-1)
	fmt.Println(nums)
}

func main() {
	printNumbers(5)
}
