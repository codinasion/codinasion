package main

import "fmt"

func reverseNumber(num int) int {

	res := 0
	for num > 0 {
		remainder := num % 10
		res = (res * 10) + remainder
		num /= 10
	}
	return res
}

func main() {
	var reverseNo int
	fmt.Print("Enter any Number to find its Reverse = ")
	fmt.Scanln(&reverseNo)

	fmt.Println(reverseNumber(reverseNo))
}
