package main

import "fmt"

func main() {
	var l, b, h int

	fmt.Printf("Enter length of Cuboid:\t")
	fmt.Scanf("%d", &l)

	fmt.Printf("Enter width of Cuboid:\t")
	fmt.Scanf("%d", &b)

	fmt.Printf("Enter height of Cuboid:\t")
	fmt.Scanf("%d", &h)

	fmt.Println("Area:", 2*(l*b+b*h+l*h))
}
