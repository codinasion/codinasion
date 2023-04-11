package main

import "fmt"

func main() {
	array := []int{1, 2, 5, 3, 6, 4, 7, 8, 9, 10}
	n := len(array)
	sum := 0
	for i := 0; i < n; i++ {
		sum += (array[i])
	}
	avg := (float64(sum)) / (float64(n))
	fmt.Println(avg)
}
