package main

import (
	"fmt"
	"math"
)

func main() {
	var num float64
	fmt.Scanf("%f", &num)
	ans := math.Cbrt(num)
	fmt.Println(ans)
}
