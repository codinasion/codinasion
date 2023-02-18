package main

import "fmt"

func main() {
	var weeks int
	fmt.Scanf("%d", &weeks)
	day := weeks * 7
	fmt.Println(day)
}
