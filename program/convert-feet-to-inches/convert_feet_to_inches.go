package main

import "fmt"

func feet_to_inches(feet float32) {
	inches := feet * 12
	fmt.Printf("%f inches",inches)
    return
    }

func main() {
	var number float32
	fmt.Printf("Please provide the value in feet: ")
	fmt.Scanln(&number)
	feet_to_inches(number)
}
