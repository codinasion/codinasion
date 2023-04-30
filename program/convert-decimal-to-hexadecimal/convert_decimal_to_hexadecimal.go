package main

import (
	"fmt"
	"strconv"
)

func main() {
	var num int64
	fmt.Scanf("%d", &num)
	answer := strconv.FormatInt(num, 16)
	fmt.Println(answer)
}
