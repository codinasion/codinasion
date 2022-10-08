package main

import "fmt"

func main() {
  var asciiValue int
  fmt.Println("Enter ASCII value:")
  fmt.Scan(&asciiValue)
	character := rune(asciiValue)

	fmt.Printf("Character corresponding to ASCII Code %d = %c\n", asciiValue, character)
}
