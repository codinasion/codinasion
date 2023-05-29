package main

import (
	"fmt"
	"strings"
)

func consonantCase(str string) string {
	var result string
	for _, char := range str {
		if strings.ContainsAny(string(char), "aeiouAEIOU") {
			result += strings.ToLower(string(char))
		} else {
			result += strings.ToUpper(string(char))
		}
	}
	return result
}

func main() {
	input := "Hello, World"
	output := consonantCase(input)
	fmt.Println(output)
}
