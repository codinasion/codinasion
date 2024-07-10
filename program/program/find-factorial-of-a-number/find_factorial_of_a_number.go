package main

import "fmt"

func main() {

	var factorialnum, fact int
	fact = 1

	fmt.Print("Enter any Number to find its Factorial = ")
	fmt.Scanln(&factorialnum)

	for i := 1; i <= factorialnum; i++ {
		fact = fact * i
	}
	fmt.Println(factorialnum, "Factorial is ", fact)
}
