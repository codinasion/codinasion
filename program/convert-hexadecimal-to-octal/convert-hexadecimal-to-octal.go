package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	var hex string
	fmt.Scanln(&hex)

	// first convert to decimal
	decimal, err := strconv.ParseInt(hex, 16, 64)

	if err != nil {
		fmt.Errorf("could not convert hex: %v to octal", hex)
		os.Exit(1)
	}

	// convert the decimal to octal
	oct := fmt.Sprintf("%o", decimal)
	fmt.Printf("the octal for hex: %v is oct: %v \n", hex, oct)
}
