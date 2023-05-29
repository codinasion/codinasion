package main

import "fmt"

func main() {
	var input int
	fmt.Printf("Enter Year: ")
	fmt.Scan(&input)

	if (input%400 == 0) || ((input%4 == 0) && (input%100 != 0)) {
		fmt.Printf("%v is a Leap Year\n", input)
	} else {
		fmt.Printf("%v is NOT a Leap Year\n", input)
	}

}
