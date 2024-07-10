package main

import (
	"fmt"
	"strings"
)

func main() {
	input := "hello world"
	output := ""
	for i, r := range input {
		if i%2 == 0 {
			output += strings.ToUpper(string(r))
		} else {
			output += strings.ToLower(string(r))
		}
	}
	fmt.Println(output)
}
