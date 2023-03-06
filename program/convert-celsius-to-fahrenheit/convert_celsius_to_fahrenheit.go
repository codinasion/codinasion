package main

import "fmt"

func main() {
	var celsius float64 = 0
	fmt.Printf("Enter temparature in celsius: \n")
	fmt.Scan(&celsius)

	fmt.Printf("Temparature in fahrenheit: %.2f", (celsius * 9.0/5.0) + 32.0)
}
