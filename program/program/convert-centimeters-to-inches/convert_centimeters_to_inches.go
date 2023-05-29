package main

import "fmt"

func main() {
	var input float32
	fmt.Printf("Input: ")
	fmt.Scanf("%v", &input)

	fmt.Printf("Output: %.2f inch(es)\n", input/2.54)
}