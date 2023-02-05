// Created by: Ravi Teja
// Language: GO
// Github: https://github.com/Sairaviteja27

// Declare Main Package
package main

// Import input output package, lets us use things such as Print
import "fmt"

// Main Function
func main() {
	var hours int
	fmt.Println("Enter number of hours :")
	fmt.Scan(&hours)
	fmt.Println("Number of seconds is ", hours*3600)
}
