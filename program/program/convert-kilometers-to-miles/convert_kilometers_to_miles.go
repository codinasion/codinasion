package main

import "fmt"

func main() {
	var km float64
	fmt.Scanf("%f", &km)
	miles := 0.621 * km
	fmt.Println(miles)
}
