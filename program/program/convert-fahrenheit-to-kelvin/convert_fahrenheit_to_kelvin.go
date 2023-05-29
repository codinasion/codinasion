package main

import "fmt"

func main() {
	var fahrenheit float64
	fmt.Print("Enter temperature in Fahrenheit: ")
	fmt.Scanln(&fahrenheit)

	kelvin := (fahrenheit + 459.67) * 5 / 9
	fmt.Printf("%.3f Kelvin\n", kelvin)
}
