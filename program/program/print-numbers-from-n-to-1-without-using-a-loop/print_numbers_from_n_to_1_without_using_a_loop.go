package main

import (
	"fmt"
)

func main() {
	fmt.Printf("Enter a Number:")
	var n int
	fmt.Scanf("%d", &n)
	ans(n)
	fmt.Print("\n")
}
func ans(n int) {
	//without loop
	//using recursion
	if n < 1 {
		return
	}
	fmt.Printf("%d ", n)
	ans(n - 1)
}
