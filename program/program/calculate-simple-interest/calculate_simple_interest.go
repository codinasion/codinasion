package main

import "fmt"

func main() {
	var amount, time, rate int
	fmt.Scanf("%d", &amount)
	fmt.Scanf("%d", &time)
	fmt.Scanf("%d", &rate)
	simpleInterest := (amount * time * rate) / 100
	fmt.Println(simpleInterest)
}
