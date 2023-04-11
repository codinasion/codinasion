package main

import "fmt"

func main() {
	var seconds int
	fmt.Scanf("%d", &seconds)
	hours := float64(seconds / 3600)
	fmt.Println(hours)
}
