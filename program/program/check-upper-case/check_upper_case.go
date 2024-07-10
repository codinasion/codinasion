package main

import (
	"fmt"
	"strings"
)

func main() {
	var char string
	fmt.Println("Enter character:")
	fmt.Scan(&char)
	if char == strings.ToUpper(char) {
		fmt.Println("Upper Case")
	} else {
		fmt.Println("Not Upper Case")
	}
}
