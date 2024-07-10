package main

import "fmt"

func main() {
	var index = linearSearch([5]int{1, 2, 3, 4, 5}, 4)
	fmt.Println(index)
}

func linearSearch(array [5]int, target int) int {
	for i := 0; i < len(array); i++ {
		if array[i] == target {
			return i
		}
	}
	return -1
}
