package main

import (
	"fmt"
)

func main() {
	asciiValues := []int{65, 66, 67}
	var result string
	for _, asciiValue := range asciiValues {
		character := rune(asciiValue)
		result += string(character)
	}
	fmt.Println(result)
}
