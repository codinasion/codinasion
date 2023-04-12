package main

import "fmt"

func sumSquareRecursive(arr []int, index int) int {
	if index < 0 {
		return 0
	}
	return arr[index] * arr[index] + sumSquareRecursive(arr, index - 1)
}

func main() {
	input := []int{1, 2, 3, 4, 5}
	fmt.Println(sumSquareRecursive(input, len(input) - 1))
}
