package main

import "fmt"

func main() {

	var i int
	fmt.Print("Input Number: ")
	fmt.Scanln(&i)

	if (i % 2 == 0) {
		fmt.Println("Even Number")
	} else {
		fmt.Println("Odd Number")
	}
}
