package main

import "fmt"

func main() {
	var i, j, k int
	i = 1
	j = 1
	k = 1
	var row int
	row = 5
	for i = 1; i <= row; i++ {
		for j = 1; j <= row-i; j++ {
			fmt.Printf(" ")
		}
		for k = 1; k <= i*2-1; k++ {
			fmt.Printf("*")
		}
		fmt.Println()
	}
	for i = row - 1; i > 0; i-- {
		for j = 1; j <= row-i; j++ {
			fmt.Printf(" ")
		}
		for k = 1; k <= i*2-1; k++ {
			fmt.Printf("*")
		}
		fmt.Println()
	}
}
