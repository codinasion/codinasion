package main

import (
	"fmt"
	"math"
)

func main() {
	var radius float64
	var height float64
	fmt.Scanf("%f", &radius)
	fmt.Scanf("%f", &height)
	surfacearea := 2 * math.Pi * radius * (radius + height)
	fmt.Println((surfacearea))
}
