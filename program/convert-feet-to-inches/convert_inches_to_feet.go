package main

import "fmt"

func main() {
	var inches float64
	var feet float64
	fmt.Scanf("%f", &inches)
	feet = inches / 12
	fmt.Println(feet)
}
