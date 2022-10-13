package main

import "fmt"

func main() {
	var input int
	fmt.Printf("Input: ")
	fmt.Scan(&input)
	fmt.Println("Output:", input/86400)
}