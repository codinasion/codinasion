package main

import "fmt"

func main() {
	var hours int

	fmt.Printf("Enter hours: ")
	fmt.Scanf("%d", &hours)

	fmt.Println("Input:", hours, "hours")
	fmt.Printf("Output: %0.2f day(s)\n", float64(hours)/24.0)
}
