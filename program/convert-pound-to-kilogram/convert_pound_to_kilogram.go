//GitHub User: @estelacruz

//Task: Write a GO program to convert pounds to kilogram
// Given: 1 pound = 0.453592 kg

package main

import "fmt"

func main() {
	var pounds float64
	var kilograms float64
	//collect user input
	fmt.Println("Input (lbs): ")
	fmt.Scan(&pounds)
	//convert
	kilograms = pounds * 0.453592
	//print output, round to two decimals
	fmt.Printf("%.2f\n", kilograms)
}
