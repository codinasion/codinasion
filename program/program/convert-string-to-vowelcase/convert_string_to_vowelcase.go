package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "hello world"

	// Convert all vowels to uppercase.
	vowels := []string{"a", "e", "i", "o", "u"}
	for _, vowel := range vowels {
		str = strings.Replace(str, vowel, strings.ToUpper(vowel), -1)
	}

	// Convert all consonants to lowercase.
	consonants := []string{"b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"}
	for _, consonant := range consonants {
		str = strings.Replace(str, consonant, strings.ToLower(consonant), -1)
	}

	fmt.Println(str)
}
