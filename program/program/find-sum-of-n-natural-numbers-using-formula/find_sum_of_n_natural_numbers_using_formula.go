package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	sum := (num * (num + 1)) / 2
	fmt.Println(sum)
}
