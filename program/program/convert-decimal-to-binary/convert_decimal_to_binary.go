package main

import (
	"fmt"
	"strconv"
)

func decimalToBinary(decimalNumber int) string {
	var binaryNumber string
	quotient := decimalNumber
	var remainder int64

	for quotient != 0 {
		remainder = int64(quotient % 2)
		binaryNumber = strconv.FormatInt(remainder, 10) + binaryNumber
		quotient = quotient / 2
	}

	return binaryNumber
}

func main() {
	decimalNumber := 5
	binaryNumber := decimalToBinary(decimalNumber)
	fmt.Println("Decimal number:", decimalNumber)
	fmt.Println("Binary number:", binaryNumber)
}
