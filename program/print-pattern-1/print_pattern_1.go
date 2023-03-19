package main

import "fmt"

func main() {
	var rows int
	fmt.Scanf("%d", &rows)
	for i := 1; i <= rows; i++ {
		for j := 1; j <= i; j++ {
			fmt.Printf("%d ", j)
		}
		fmt.Println()
	}
}
