package main

import (
	"fmt"
	"math"
	"strconv"
)

func octalToDecimal(octal string) int {
	var decimal int
	for i, c := range octal {
		num, err := strconv.ParseUint(string(c), 8, 64)
		if err != nil {
			return 0
		}
		decimal += int(num) * int(math.Pow(8, float64(len(octal)-i-1)))
	}
	return decimal
}

func main() {
	octal := "12"
	decimal := octalToDecimal(octal)
	fmt.Println("Octal:", octal)
	fmt.Println("Decimal:", decimal)
}
