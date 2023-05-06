package main

import (
	"fmt"
	"math"
)

func findRoots(a, b, c float64) (float64, float64, error) {
	discriminant := b*b - 4*a*c
	if discriminant < 0 {
		return 0, 0, fmt.Errorf("Equation has no real roots")
	}
	root1 := (-b + math.Sqrt(discriminant)) / (2 * a)
	root2 := (-b - math.Sqrt(discriminant)) / (2 * a)
	return root1, root2, nil
}

func main() {
	a := 1.0
	b := 2.0
	c := 1.0
	root1, root2, err := findRoots(a, b, c)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("The roots are %.2f and %.2f", root1, root2)
	}
}
