package main

import "fmt"

func main() {
	var n1, n2 int
	fmt.Scanf("%d", &n1)
	fmt.Scanf("%d", &n2)
	n1 = n1 + n2
	n2 = n1 - n2
	n1 = n1 - n2
	fmt.Println(n1)
	fmt.Println(n2)
}
