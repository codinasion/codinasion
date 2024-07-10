package main

import (
	"fmt"
)

func main() {
	var rows int
	fmt.Print("Input: ")
	fmt.Scanln(&rows)

	for i := rows; i >= 1; i-- {
		for j := 1; j <= i; j++ {
			fmt.Print(j, " ")
		}
		fmt.Println("")
	}
}
