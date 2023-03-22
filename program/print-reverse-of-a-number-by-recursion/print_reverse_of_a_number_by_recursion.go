package main

import (
	"fmt"
	"strconv"
)

func reverseNum(nums int) string {
	if nums < 10 {
		return strconv.Itoa(nums)
	}
	str := strconv.Itoa(nums % 10)
	return str + reverseNum(nums / 10)
}

func main() {
	var i int
	fmt.Print("Input Numbers: ")
	fmt.Scan(&i)
	reverse := reverseNum(i)
	fmt.Println(reverse)
}
