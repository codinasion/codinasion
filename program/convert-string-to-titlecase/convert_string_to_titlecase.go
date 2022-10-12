package main

import (
	"fmt"
)

// Returns if the passed char is a lowercase letter
func isLowercaseLetter(char string) bool {
	return (char[0] >= 97 && char[0] <= 122)
}

// Returns if the passed char is a uppercase letter
func isUppercaseLetter(char string) bool {
	return (char[0] >= 65 && char[0] <= 90)
}

// Returns if the passed char is a letter (Comparing ascii codes)
func isLetter(char string) bool {
	return isLowercaseLetter(char) || isUppercaseLetter(char)
}

// Returns the passed character uppercased
func toUpperCaseChar(char string) string {
	if isLowercaseLetter(string(char[0])) {
		return string(char[0] - 32)
	}

	return char
}

func toLowerCaseChar(char string) string {
	if isUppercaseLetter(string(char)) {
		return string(char[0] + 32)
	}

	return char
}

// Returns the passed string but in Title Case
func toTitleCase(str string) string {
	titleCasedStr := ""

	for i := 0; i < len(str); i++ {
		char := string(str[i])

		if i == 0 || i > 0 && !isLetter(string(str[i-1])) {
			titleCasedStr += toUpperCaseChar(char)
		} else {
			titleCasedStr += toLowerCaseChar(char)
		}

	}

	return titleCasedStr
}

func main() {
	result := toTitleCase("hello###  world --##..00 program")
	fmt.Println(result)
}
