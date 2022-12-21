package main

import (
	"fmt"
	"log"
)

func main() {
	var input string
	fmt.Printf("Enter the value of your choice: ")
	fmt.Scanf("%s", &input)

	if len(input) == 0 {
		log.Println("Looks like you didn't enter anything. Please enter a digit to continue!")
		return
	}

	if len(input) > 1 {
		log.Println("Please enter only one digit!")
		return
	}

	// ASCII Values for-
	// 0-9	45-57
	for _, v := range input {
		if v >= 45 && v <= 57 {
			fmt.Println("Input is a DIGIT!")
		} else {
			fmt.Println("Input is NOT a digit!")
		}
	}

}
