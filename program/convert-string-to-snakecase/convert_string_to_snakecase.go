package main

import (
	"fmt"
	"strings"
)

func main() {

	word := "words in string"
	res := ""
	words := strings.Fields(word)
	for w := range words {
		res += words[w]
		res += "_"
	}

	fmt.Println(res[:len(res)-1])
}
