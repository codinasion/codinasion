package main

import (
	"fmt"
	"strings"
)

func camelcase(str string) string {
	words := strings.Split(str, " ")
	new_words := []string{}
	i := 0
	for _, word := range words {
		if len(word) > 1 && i > 0 {
			new_words = append(new_words, strings.ToUpper(word[0:1])+(word[1:]))
		} else {
			new_words = append(new_words, word)
		}
		i++
	}
	return strings.Join(new_words, "")
}

func main() {
	str := "hello coders"
	fmt.Println(camelcase(str))
}
