package main

import "fmt"

func main() {
	var input, reverse string
	fmt.Scan(&input)
	for _, v := range input {
		reverse = string(v) + reverse
	}
	fmt.Println(reverse)
}