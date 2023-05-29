package main

import "fmt"

func main() {
	arr := []int{2, 4, 5, 6, 7, 8, 9, 10, 11, 25}
	max_num := arr[0]
	for i := 0; i < len(arr); i++ {
		if arr[i] > max_num {
			max_num = arr[i]
		}
	}
	fmt.Println(max_num)
}
