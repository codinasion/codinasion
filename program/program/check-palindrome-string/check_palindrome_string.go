package main

import "fmt"

func isPalindrome(str string) bool {
	var reverse string
	for _, v := range str {
		reverse = string(v) + reverse
	}
	return str == reverse
}

func main() {
	var input string

	fmt.Print("Input String: ")
	fmt.Scan(&input)

	if (isPalindrome(input)) {
		fmt.Println("Palindrome String")
	} else {
		fmt.Println("Not Palindrome String")
	}
}
