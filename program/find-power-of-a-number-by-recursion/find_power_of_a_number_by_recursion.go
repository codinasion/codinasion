package main

import "fmt"

func power(num float64, pow float64) float64 {
	if pow == 0 {
		return 1
	}
	return num * power(num, pow - 1)
}

func main() {
	var base float64
	var exponent float64
	
	fmt.Print("Enter base number: ")
	fmt.Scan(&base)

	fmt.Print("Enter power of exponent: ")
	fmt.Scan(&exponent)

	fmt.Println(power(base, exponent))
}
