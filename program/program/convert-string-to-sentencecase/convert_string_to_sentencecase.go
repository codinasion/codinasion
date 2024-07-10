package main

import (
	"fmt"
	"strings"
	"unicode"
)

func sentenceCase(str string) string {
	newString := "" // return value
	cap := false    // letter capitalized if true
	punc := "!?."   // listed punctuation
	for index, x := range str {
		if index == 0 {
			if unicode.IsLower(x) {
				newString += string(unicode.ToUpper(x))
			} else if x == ' ' || strings.Contains(string(x), punc) {
				newString += string(x)
				cap = true
			} else {
				newString += string(x)
			}
		} else {
			if strings.Contains(string(x), punc) {
				newString += string(x)
				cap = true
			} else {
				if cap && unicode.IsLower(x) {
					newString += string(unicode.ToUpper(x))
					cap = false
				} else {
					newString += string(x)
				}
			}
		}
	}
	return newString
}

func main() {
	var str string
	str = "hello world"
	fmt.Println(sentenceCase(str))
}
