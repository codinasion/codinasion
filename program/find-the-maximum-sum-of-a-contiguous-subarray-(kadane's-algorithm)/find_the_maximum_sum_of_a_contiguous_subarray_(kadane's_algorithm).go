package main

import "fmt"

// TC - O(n) | SC - O(1)
func KadaneAlgorithm(array []int) int {
	maxEndingHere := array[0]
	maxSoFar := array[0]

	for i := 1; i < len(array); i++ {
		num := array[i]
		maxEndingHere = max(num, maxEndingHere+num)
		maxSoFar = max(maxSoFar, maxEndingHere)
	}
	return maxSoFar
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	arr1 := []int{1, 2, 3, -2, 5}
	arr2 := []int{2, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	arr3 := []int{31, -2, -3, -4, -5, -6, -7, -8, -9, -10}
	arr4 := []int{4, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10}
	arr5 := []int{5, 4, -6, 7, 8}
	fmt.Println(KadaneAlgorithm(arr1))
	fmt.Println(KadaneAlgorithm(arr2))
	fmt.Println(KadaneAlgorithm(arr3))
	fmt.Println(KadaneAlgorithm(arr4))
	fmt.Println(KadaneAlgorithm(arr5))
}
