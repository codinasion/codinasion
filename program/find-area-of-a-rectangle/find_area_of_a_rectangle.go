package main

import "fmt"

func main() {
	var l, b float32
	fmt.Printf("Enter length of rectangle: ")
	fmt.Scanf("%v", &l)
	fmt.Printf("Enter breadth of rectangle: ")
	fmt.Scanf("%v", &b)

	fmt.Printf("Area of rectangle: %v\n", l*b)
}
