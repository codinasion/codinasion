package main

import "fmt"

func main() {
	var arr = []int{5, 2, 3, 4, 5, 7, 8, 9}
	for i := len(arr) - 1; i >= 0; i-- {
		fmt.Print(arr[i], " ")
	}
}
