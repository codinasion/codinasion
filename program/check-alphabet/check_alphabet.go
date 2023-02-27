package main

import (
	"fmt"
	"regexp"
)

var isAlphabet = regexp.MustCompile(`^[a-zA-Z]`).MatchString

func main() {
	var str string
	fmt.Print("Input a character: ")
	fmt.Scan(&str)
	
	if (isAlphabet(str)) {
		fmt.Println("Alphabet")
	} else {
		fmt.Println("Non Alphabet")
	}
}
