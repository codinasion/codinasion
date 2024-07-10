package main

import "fmt"

func main() {
	list := []int{1, 2, 4, 5, 9, 10, 12, 13, 15, 16}
	value := 12
	index := ternary_search(list, value)

	if index != -1 {
		fmt.Printf("Element %d found at index %d", value, index)
	} else {
		fmt.Printf("Element %d not found !", value)
	}
}

func ternary_search(array []int, value int) int {
	var l = 0
	var r = len(array) - 1

	for l <= r {
		ps := (r - l) / 3
		m1 := l + ps
		m2 := r - ps

		if array[m1] == value {
			return m1
		}

		if array[m2] == value {
			return m2
		}

		if value < array[m1] {
			r = m1 - 1
		} else if value > array[m2] {
			l = m2 + 1
		} else {
			l = m1 + 1
			r = m2 - 1
		}
	}

	return -1

}
