package main

import (
	"fmt"
	"strings"
)

func splitStringIntoArray(str string) {
	arr := strings.Split(str, " ")
	semiformat := fmt.Sprintf("%q\n", arr)
	tokens := strings.Split(semiformat, " ")
	fmt.Printf(strings.Join(tokens, ", "))
}

func main() {
	str := "hello world"
	splitStringIntoArray(str)
}
