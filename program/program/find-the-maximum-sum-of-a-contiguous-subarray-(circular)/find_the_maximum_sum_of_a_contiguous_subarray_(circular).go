package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Enter array elements separated by space:")
	line, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Failed to take input:", err)
	}

	inputArray, hasNegatives := stringToIntSlice(line)
	fmt.Println("Input Array:", inputArray)

	// We need the sum of contiguous sub-array in circular fashion
	if hasNegatives {
		// Try to think what happens if we do this and we get all +ve inputs
		inputArray = append(inputArray, inputArray[:len(inputArray)-1]...)
	}
	fmt.Println("Maximum sum:", findMaxSum(inputArray))
}

func findMaxSum(input []int) int {
	var max, curr int
	for _, v := range input {
		curr += v
		if curr > max {
			max = curr
		}

		if curr < 0 {
			curr = 0
		}
	}
	return max
}

func stringToIntSlice(input string) ([]int, bool) {
	// trim the space as \n in appended when we take input using bufio
	input = strings.TrimSpace(input)
	stringSlice := strings.Split(input, " ")
	hasNegatives := false
	var result []int
	for _, v := range stringSlice {
		temp, err := strconv.Atoi(v)
		if err != nil {
			log.Fatalln("Failed to convert string to int:", err)
		}
		if temp < 0 {
			hasNegatives = true
		}
		result = append(result, temp)
	}

	return result, hasNegatives
}
