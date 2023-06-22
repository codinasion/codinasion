package main

import (
	"fmt"
)

func sumOfCubes(numbers []int) int {
	// Base case
	if len(numbers) == 0 {
		return 0
	}

	// Recursive case
	return numbers[0]*numbers[0]*numbers[0] + sumOfCubes(numbers[1:])
}

func main() {
	// Get the input numbers
	numbers := []int{1, 2, 3, 4, 5}

	// Find the sum of the cubes
	sum := sumOfCubes(numbers)

	// Print the output
	fmt.Println("The sum of the cubes is", sum)
}
