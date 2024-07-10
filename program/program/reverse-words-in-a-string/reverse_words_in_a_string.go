package main

import (
	"fmt"
	"strings"
)

// reverseWords reverses the order of words in a given string.
func reverseWords(input string) string {
	// Split the input string into words.
	words := strings.Fields(input)

	// Reverse the order of words using a two-pointer approach.
	for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
		words[i], words[j] = words[j], words[i]
	}

	// Join the reversed words into a string and return.
	return strings.Join(words, " ")
}

func main() {
	// Example usage of reverseWords function.
	inputString := "Hello World"
	reversedResult := reverseWords(inputString)
	fmt.Println(reversedResult)
}
