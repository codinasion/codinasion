package main

import "fmt"

func main() {
	var miles float64
	fmt.Scanf("%f", &miles)
	meters := miles * 1609
	fmt.Println(meters)
}
