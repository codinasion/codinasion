package main

import (
	"errors"
	"fmt"
	"log"
)

func factorial(num int) int {
	if num == 0 {
		return 1
	} else {
		return num * factorial(num-1)
	}
}

func permutations(total int, sample int) (int, error) {
	var value int
	var error error
	if total > sample {
		value = factorial(total) / factorial(total-sample)
	} else {
		error = errors.New(fmt.Sprintf("ERROR: supplied total > sample; permutations(total=%d, sample=%d)", total, sample))
	}
	return value, error
}

func main() {
	var result, err = permutations(5, 2)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(result)
}
