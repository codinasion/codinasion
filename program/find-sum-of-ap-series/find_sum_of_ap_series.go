package main

import "fmt"

func main() {
	var a int
	fmt.Scanf("%d", &a)
	var n int
	fmt.Scanf("%d", &n)
	var d int
	fmt.Scanf("%d", &d)
	sum := (2*a + ((n - 1) * d)) * n
	fmt.Println(sum / 2)
}
