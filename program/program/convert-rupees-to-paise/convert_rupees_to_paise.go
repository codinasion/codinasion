package main

import "fmt"

func main() {
	var rupee float64
	var paise int
	fmt.Scanf("%f", &rupee)
	paise = int(rupee * 100)
	fmt.Println(paise)
}
