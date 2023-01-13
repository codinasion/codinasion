package main

import "fmt"

func merge(a, b string) string {
	return a + b
}
func main() {
	str1 := "hello "
	str2 := "world"

	fmt.Println(merge(str1, str2))
}