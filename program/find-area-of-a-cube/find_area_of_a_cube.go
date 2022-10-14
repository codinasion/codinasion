package main

import "fmt"

func main() {
	var num int
	fmt.Print("Enter the side of a cube to find its area = ")
	fmt.Scanln(&num)
	cube := 6 * num * num
	fmt.Println("\nArea of Cube with side", num, "=", cube)
}
