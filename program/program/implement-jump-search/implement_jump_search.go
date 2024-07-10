package main

import (
	"fmt"
	"math"
)

func jumpSearch(arr []int, n int, x int) int {
	blockSize := int(math.Sqrt(float64(n)))
	prev := 0

	for arr[min(blockSize-1, n-1)] < x {
		prev = blockSize
		blockSize += int(math.Sqrt(float64(n)))
		if prev >= n {
			return -1
		}
	}

	for arr[prev] < x && prev < min(blockSize, n) {
		prev++
	}

	if arr[prev] == x {
		return prev
	}

	return -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	arr := []int{1, 2, 3, 4, 5}
	x := 5

	index := jumpSearch(arr, len(arr), x)

	if index != -1 {
		fmt.Println("Value found at index:", index)
	} else {
		fmt.Println("Value not found in the list")
	}
}
