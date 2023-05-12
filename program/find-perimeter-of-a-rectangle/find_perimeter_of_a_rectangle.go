package main

import "fmt"

func main() {
	var length int
	var width int
	fmt.Scanf("%d", &length)
	fmt.Scanf("%d", &width)
	perimeter := 2 * (length + width)
	fmt.Println(perimeter)
}
