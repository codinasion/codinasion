package main

import (
	"fmt"
	"math"
)

func areaOfCircle(r float64) float64 {
	return math.Pi * r * r
}

func roundFloat(val float64, precision uint) float64 {
	var ratio float64 = math.Pow(10, float64(precision))
	return math.Round(val*ratio) / ratio
}

func main() {
	var r, area float64

	fmt.Println("Enter radius : ")
	fmt.Scan(&r)

	area = areaOfCircle(r)

	fmt.Println("\nArea : ", roundFloat(area, 2))
}
