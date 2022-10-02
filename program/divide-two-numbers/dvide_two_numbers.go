package main

import (
	"fmt"
	"math"
)

func divide(dividend int, divisor int) int {
	output := dividend / divisor

	return output
}

func main() {
	output := divide(10, 2)
	fmt.Println(output)

	output := divide(2, 4)
	fmt.Println(output)
}