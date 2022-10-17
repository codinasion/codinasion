package main

import (
	"fmt"
	"log"
)

func main() {
	var input string
	fmt.Printf("Enter any character: ")
	fmt.Scanf("%s", &input)

	if len(input) == 0 {
		log.Println("Looks like you didn't enter anything. Please enter a character to continue!")
		return
	}

	if len(input) > 1 {
		log.Println("Please enter only one character!")
		return
	}

	// Anything other than a number or alphabet is a special character
	// ASCII Values for-
	// a-z	97-122
	// A-Z	65-90
	// 0-9	45-57
	for _, v := range input {
		if (v >= 45 && v <= 57) || (v >= 65 && v <= 90) || (v >= 97 && v <= 122) {
			fmt.Println("Input is NOT a special character!")
		} else {
			fmt.Println("Input is a special character!")
		}
	}

}
