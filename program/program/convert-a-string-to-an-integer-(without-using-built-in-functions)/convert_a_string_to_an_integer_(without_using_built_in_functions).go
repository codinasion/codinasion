package main

import (
	"fmt"
	"math"
	"reflect"
)

// Returns the passed number string as int. If the provided string isn't right it returns -1
func stringToInt(str string) int {
	var finalInt int = 0

	for i := len(str) - 1; i >= 0; i-- {
		if str[i] >= 48 && str[i] <= 57 {
			power := float64(len(str) - i - 1)
			finalInt += int(str[i]-48) * int(math.Pow(10, power))
		} else {
			return -1
		}
	}

	return finalInt
}

func main() {
	result := stringToInt("230500")
	fmt.Println(result)
	fmt.Println(reflect.TypeOf(result))
}
