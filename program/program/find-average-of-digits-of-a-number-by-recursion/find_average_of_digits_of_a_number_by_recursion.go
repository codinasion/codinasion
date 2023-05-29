package main

import "fmt"

func averageRecursive(numbers []int, total, count int) float64 {
	if len(numbers) == 0 {
		return float64(total) / float64(count)
	}

	return averageRecursive(numbers[1:], total+numbers[0], count+1)
}

func main() {
	numbers := []int{5, 10, 15, 20}
	average := averageRecursive(numbers, 0, 0)
	fmt.Printf("Average: %.2f\n", average)
}
