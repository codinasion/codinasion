package main

import "fmt"

func main() {
	arr := [...]int{10, 20, 30, 40, 50}
	min_num := arr[0]
	for _, value := range arr {
		if (value < min_num) {
			min_num = value
		}
	}
	fmt.Println(min_num)
}
