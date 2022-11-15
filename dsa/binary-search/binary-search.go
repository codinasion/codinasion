package main

import "fmt"

//Binary search function
func binarySearch(arr *[]int, n int) int{
	var l, h, mid = 0, 0, 0
	length := len(*arr)
	h = length - 1
	for ; l <= h ; {
		mid = (l + h) / 2
		if (*arr)[mid] == n {
			//Returns array index if target element is in the middle of the array
			return mid
		} else {
			if n < (*arr)[mid] {
				//If target element is less than middle element
				//searches left half of the array

				h = mid - 1
			} else {
				//If target element is greater than middle element
				//searches right half of the array 
				l = mid + 1
			}
		}
	}

	//Returns -1 if the target element is not found
	return -1
}

func main() {
	arr := []int{10, 20, 30, 40, 50, 60, 70, 80, 90, 100}
	n := 30
	fmt.Println(binarySearch(&arr, n))
}