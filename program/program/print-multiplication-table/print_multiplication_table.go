package main

import (
	"fmt"
)

func main() {
	// Get the number from the user
	var number int
	fmt.Print("Enter a number: ")
	fmt.Scanf("%d", &number)

	// Print the multiplication table
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d x %d = %d\n", number, i, number*i)
	}
}
