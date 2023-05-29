package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {

	var octalStr string
	fmt.Println("Enter octal number")
	fmt.Scanln(&octalStr)

	// convert an octal str to a decimal number
	decimalNum, err := strconv.ParseInt(octalStr, 8, 64)
	if err != nil {
		fmt.Println("error occur when parse octal num")
		return
	}

	// Convert a decimal number to a hexadecimal number
	hexStr := strconv.FormatInt(decimalNum, 16)

	fmt.Printf("octal number %s converted to hexadecimal number：%s\n", octalStr, strings.ToUpper(hexStr))
}
