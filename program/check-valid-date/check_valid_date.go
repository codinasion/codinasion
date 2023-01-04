package main

import (
	"fmt"
	"time"
)

func main() {
	var input string
	fmt.Printf("Enter date in YYYY-MM-DD format: ")
	fmt.Scan(&input)

	_, err := time.Parse("2006-01-02", input)
	if err != nil {
		fmt.Println("Invalid Date")
	} else {
		fmt.Println("Valid Date")
	}

}
