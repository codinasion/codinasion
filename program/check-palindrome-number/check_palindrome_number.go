package main

import "fmt"

func isPalindrome(nums int) bool {
	input_num := nums
	var remainder int
	reversedNumber := 0

	for nums > 0 {
		remainder = nums % 10
		reversedNumber = (reversedNumber * 10) + remainder
		nums = nums / 10
	}
	
	return input_num == reversedNumber
}

func main() {
	var i int

	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)

	if isPalindrome(i) {
		fmt.Println("Palindrome Number")
	} else {
		fmt.Println("Not Palindrome Number")
	}
}
