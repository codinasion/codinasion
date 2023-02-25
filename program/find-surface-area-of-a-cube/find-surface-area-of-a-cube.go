package main

import (
	"fmt"
)

func main() {
	var side, area float64

	fmt.Println("Enter side : ")
	fmt.Scan(&side)

	area = 6.0 * side * side

	fmt.Println("\nSurface Area : ", area)
}
