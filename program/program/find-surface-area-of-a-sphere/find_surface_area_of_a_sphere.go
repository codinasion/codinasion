package main

import (
	"fmt"
	"math"
)

func sphere_surface_area(radius float64) {
	surface_area := 4 * math.Pi * math.Pow(radius, 2)

	fmt.Printf("Radius: %f\nSurface Area: %f", radius, surface_area)

}

func main() {
	var number float64
	fmt.Scanln(&number)
	sphere_surface_area(number)
}
