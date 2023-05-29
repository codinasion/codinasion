package main

import (
	"fmt"
	"math"
)

func main() {
	var base int
	var exponent int
	fmt.Scanf("%d", &base)
	fmt.Scanf("%d", &exponent)
	answer := math.Pow(float64(base), float64(exponent))
	fmt.Println(answer)
}
