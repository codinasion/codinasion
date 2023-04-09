package main

import "fmt"

func main() {
	var str string
	fmt.Scanln(&str)
	var length = len(str)
	fmt.Println(length)
}
