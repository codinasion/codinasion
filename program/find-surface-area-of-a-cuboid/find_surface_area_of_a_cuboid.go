package main

import (
	"fmt"
)

func main() {

	fmt.Printf("Lenth:")
	var length float64
	fmt.Scanf("%f", &length)
	fmt.Printf("Width:")
	var width float64
	fmt.Scanf("%f", &width)
	fmt.Printf("Height:")
	var height float64
	fmt.Scanf("%f", &height)

	surface_area := 2 * (length*width + length*height + width*height)

	fmt.Printf("Surface Area:%.f\n", surface_area)
}
