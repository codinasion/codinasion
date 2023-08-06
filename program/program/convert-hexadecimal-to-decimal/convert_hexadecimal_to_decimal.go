package main

import (
	"fmt"
	"math"
)

func hexadecimalToDecimal(hexadecimalNumber string) int {
	var decimalNumber int
	var power int = 0

	for i := len(hexadecimalNumber) - 1; i >= 0; i-- {
		digit := hexadecimalNumber[i]

		if digit >= '0' && digit <= '9' {
			decimalNumber += int(digit-'0') * int(math.Pow(16, float64(power)))
		} else if digit >= 'A' && digit <= 'F' {
			decimalNumber += int(digit-'A'+10) * int(math.Pow(16, float64(power)))
		}

		power++
	}

	return decimalNumber
}

func main() {
	hexadecimalNumber := "F"
	decimalNumber := hexadecimalToDecimal(hexadecimalNumber)
	fmt.Println("Hexadecimal number:", hexadecimalNumber)
	fmt.Println("Decimal number:", decimalNumber)
}
