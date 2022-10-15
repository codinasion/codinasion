package main

import (
	"fmt"
	"unicode"
)

func main() {
	var char rune
	fmt.Scanf("%c", &char)
	fmt.Println(unicode.IsLower(char))
}
