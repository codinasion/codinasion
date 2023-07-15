package main

import (
	"fmt"
	"strconv"
	"strings"
)

func sumRecursive(num int) int {
	if num == 0 {
		return 0
	}
	return num%10 + sumRecursive(num/10)
}

func main() {
	var input string

	fmt.Println("Input :")
	fmt.Scanln(&input)

	numberStrings := strings.Fields(input)
	numbers := make([]int, len(numberStrings))

	for i, numStr := range numberStrings {
		num, _ := strconv.Atoi(numStr)
		numbers[i] = num
	}

	sum := 0
	for _, num := range numbers {
		sum += sumRecursive(num)
	}
	fmt.Println("Output :", sum)
}