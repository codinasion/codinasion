package main

import "fmt"

func main() {
	arr := [5]int{1, 2, 3, 4, 5}
	var sum int
	for i := 0; i < 5; i++ {
		sum += arr[i]
	}
	fmt.Println(float64(sum / len(arr)))

}
