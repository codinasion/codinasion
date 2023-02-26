package main

import "fmt"

func main() {
	var a int
	fmt.Scanf("%d", &a)
	var b int
	fmt.Scanf("%d", &b)
	a = a + b
	b = a - b
	a = a - b
	fmt.Println(a, b)
}
