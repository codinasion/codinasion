package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	for i := 1; i <= num; i++ {
		fmt.Print(i, " ")
	}
}
