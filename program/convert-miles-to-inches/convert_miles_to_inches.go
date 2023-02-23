package main

import "fmt"

func main() {
	var miles int
	fmt.Scanf("%d", &miles)
	inches := 63360 * miles
	fmt.Println(inches)
}
