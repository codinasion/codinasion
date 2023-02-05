package main

import "fmt"

func main() {
	var ftemp float64 = 0
	fmt.Scanf("%f", &ftemp)
	ctemp := (ftemp - 32) * 0.556
	fmt.Printf("%.2f", ctemp)
}
