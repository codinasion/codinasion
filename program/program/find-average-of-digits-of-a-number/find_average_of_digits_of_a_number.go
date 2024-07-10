package main

import "fmt"

func averageOfDigits(nums[] int) int {
	sum := 0
	for _,
	v := range nums {
		sum += v
	}
	return sum / len(nums)
}

func main() {
	i := [] int {1, 2, 3}
	fmt.Println(averageOfDigits(i))
}
