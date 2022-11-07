package main

import (
	"fmt"
	"unicode"
)

func main() {
	var char rune
	fmt.Scanf("%c", &char)
	if unicode.IsLower(char) {
		fmt.Printf("Character '%c' is lower case\n", char)
	} else {
		fmt.Printf("Character '%c' is not in lower case\n", char)
	}
}
