package main

import (
	"fmt"
)

func maxSubarraySum(arr []int) int {
	maxSoFar := 0
	maxEndingHere := 0
	for _, num := range arr {
		maxEndingHere = maxEndingHere + num
		if maxEndingHere < 0 {
			maxEndingHere = 0
		} else if maxSoFar < maxEndingHere {
			maxSoFar = maxEndingHere
		}
	}
	return maxSoFar
}

func main() {
	arr := []int{-2, -3, 4, -1, -2, 1, 5, -3}
	fmt.Println("Maximum sum of a contiguous subarray:", maxSubarraySum(arr))
}
