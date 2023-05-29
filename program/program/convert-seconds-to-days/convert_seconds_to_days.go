package main

import "fmt"

func main() {
	var input float64
	fmt.Printf("Input: ")
	fmt.Scan(&input)
	fmt.Printf("Output: %.5f\n", input/86400)
}