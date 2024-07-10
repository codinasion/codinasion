package main

import (
	"fmt"
)

func isPrime(n int) bool {
	// Check if the number is less than 2
	if n < 2 {
		return false
	}

	// Check if the number is 2
	if n == 2 {
		return true
	}

	// Check if the number is divisible by any number from 2 to n/2
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}

	// The number is prime if it passes all the above checks
	return true
}

func main() {
	// Get the input numbers
	start, end := 10, 20

	// Iterate over the numbers from start to end
	for i := start; i <= end; i++ {
		// Check if the number is prime
		if isPrime(i) {
			// Print the number
			fmt.Println(i)
		}
	}
}
