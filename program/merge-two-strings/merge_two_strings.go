package main

import "fmt"

func merge(a, b string) string {
	return a + b
}
func main() {
	var str1 string
	var str2 string

	fmt.Println("Enter two strings:")
	fmt.Scanln(&str1)
	fmt.Scanln(&str2)

	fmt.Println(merge(str1, str2))
}