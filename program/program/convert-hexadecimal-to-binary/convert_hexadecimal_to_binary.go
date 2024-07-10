package main

import (
	"fmt"
	"strconv"
	"strings"
)

func hexToBinary(hex string) string {
	dec, err := strconv.ParseUint(hex, 16, 64)
	if err != nil {
		return ""
	}
	binary := fmt.Sprintf("%064b", dec)
	binaryWithoutLeadingZeros := strings.TrimLeft(binary, "0")
	return binaryWithoutLeadingZeros
}

func main() {
	hex := "3"
	binary := hexToBinary(hex)
	fmt.Println("Hexadecimal:", hex)
	fmt.Println("Binary:", binary)
}
