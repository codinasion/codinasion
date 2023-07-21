package main

import (
	"fmt"
	"strings"
)

func toPascalCase(str string) string {
	words := strings.Split(str, " ")
	newWords := []string{}
	for _, word := range words {
		firstLetter := word[0]
		restOfWord := word[1:]
		newWord := strings.ToUpper(string(firstLetter)) + restOfWord
		newWords = append(newWords, newWord)
	}
	return strings.Join(newWords, "")
}

func main() {
	str := "hello world"
	fmt.Println("Input string:", str)
	fmt.Println("PascalCase string:", toPascalCase(str))
}
