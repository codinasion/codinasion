package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "hello world"

	// Convert all letters to uppercase.
	str = strings.ToUpper(str)

	// Replace all spaces with underscores.
	str = strings.Replace(str, " ", "_", -1)

	fmt.Println(str)
}
