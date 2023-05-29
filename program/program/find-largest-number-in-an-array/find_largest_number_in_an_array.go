package main

func findLargestNumberInAnArray(arr []int) int {
	var largest int
	for _, v := range arr {
		if v > largest {
			largest = v
		}
	}
	return largest
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	println(findLargestNumberInAnArray(arr))
}