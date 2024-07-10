package main

import "fmt"

func moveZeroesToEnd(arr [16]int) [16]int {
	var nonZeroes []int
	for _, elem := range arr {
		if elem != 0 {
			nonZeroes = append(nonZeroes, elem)
		}
	}

	return [16]int(append(nonZeroes, make([]int, len(arr)-len(nonZeroes))...))
}

func main() {
	var arr = [16]int{0, 1, 0, 0, 2, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 0}
	arr = moveZeroesToEnd(arr)
	fmt.Println(arr)
}
