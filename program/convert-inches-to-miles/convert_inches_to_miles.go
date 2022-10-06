package main

import "fmt"

func convertInchesToMiles(inches int) float64 {
	return float64(inches / 63360)
}

func main() {
	fmt.Println(convertInchesToMiles(950700))
}
