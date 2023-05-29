package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("Enter the first number: ")
	var firstNumber int
	fmt.Scanln(&firstNumber)
	fmt.Println("Enter the second number: ")
	var secondNumber int
	fmt.Scanln(&secondNumber)
	var greatestCommonDivisor = gcd(firstNumber, secondNumber)
	fmt.Println("The GCD of " + strconv.Itoa(firstNumber) + " and " + strconv.Itoa(secondNumber) + " is " + strconv.Itoa(greatestCommonDivisor))
}

func gcd(firstNumber int, secondNumber int) int {
	var gcd int
	if(firstNumber == 0){
		return secondNumber
	}
	if(secondNumber == 0){
		return firstNumber
	}
	for i := 1; i <= firstNumber && i <= secondNumber; i++ {
		if firstNumber%i == 0 && secondNumber%i == 0 {
			gcd = i
		}
	}
	return gcd
}
