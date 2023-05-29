package main

import (
	"fmt"
	"strings"
)

func PrintPascalTriangle(n int) {
	fmt.Print(strings.Repeat(" ", (n-1)*3))
	fmt.Printf("%6d \n", 1)

	prev_row := []int{1}
	for i := 1; i < n; i++ {
		new_row := make([]int, i+1, i+1)
		new_row[0] = 1
		new_row[i] = 1

		for j := 1; j < i; j++ {
			new_row[j] = prev_row[j-1] + prev_row[j]
		}

		fmt.Print(strings.Repeat(" ", (n-i-1)*3))
		for j := 0; j < i+1; j++ {
			fmt.Printf("%6d ", new_row[j])
		}
		fmt.Println()

		prev_row = new_row
	}
}

func main() {
	var input int
	fmt.Scan(&input)
	PrintPascalTriangle(input)
}
