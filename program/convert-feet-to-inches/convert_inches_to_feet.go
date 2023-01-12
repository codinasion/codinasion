package main

import "fmt"

func main() {
	var inches float64
	var feets float64
	fmt.Scanf("%f", &inches)
	feets = inches / 12
	fmt.Println(feets)
}
