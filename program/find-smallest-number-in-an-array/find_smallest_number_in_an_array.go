package main

import "fmt"

func main() {
	var size, i int
	fmt.Scan(&size)
	arr := make([]int, size)
	for i = 0; i < size; i++ {
		fmt.Scan(&arr[i])
	}
	small := arr[0]
	for i = 0; i < size; i++ {
		if small > arr[i] {
			small = arr[i]
		}
	}
	fmt.Println(small)
}
