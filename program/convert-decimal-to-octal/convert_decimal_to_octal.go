package main

import (
	"fmt"
	"strconv"
)

func main() {

	var num int64
  fmt.Println("Enter Decimal Value:")
  fmt.Scan(&num)
	oct_num := strconv.FormatInt(num, 8)
	fmt.Println("Octal num: ", oct_num)

}
