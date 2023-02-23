package main

import (
	"fmt"
	"math"
)

func main() {
	var num, rem int
	fmt.Scanf("%d", &num)
	index := 0
	dnum := 0
	for num != 0 {
		rem = num % 10
		num = num / 10
		dnum = dnum + rem*int(math.Pow(2, float64(index)))
		index++
	}
	fmt.Println(dnum)
}
