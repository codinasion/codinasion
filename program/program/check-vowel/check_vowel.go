package main

import "fmt"

func main() {
	var input string
	fmt.Printf("Enter Letter: ")
	fmt.Scan(&input)

	if (input == "a") || (input == "e") || (input == "i") || (input == "o") || (input == "u") || (input == "A") || (input == "E") || (input == "I") || (input == "O") || (input == "U"){
		fmt.Printf("%v is a vowel\n", input)
	} else {
		fmt.Printf("%v is NOT a vowel\n", input)
	}

}
