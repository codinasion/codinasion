package main

import "fmt"

func main() {
	var input float32

	fmt.Printf("Enter length in Centimeters: ")
	fmt.Scanf("%v", &input)
	fmt.Printf("[%v] cm is [%v] feet\n", input, input*0.0328084)
	
}
