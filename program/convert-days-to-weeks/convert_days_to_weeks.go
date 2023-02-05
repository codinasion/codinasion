package main

import "fmt"

func main() {
	var days int
	fmt.Scanf("%d", &days)
	weeks := float64(days / 7)
	fmt.Println(weeks)
}
