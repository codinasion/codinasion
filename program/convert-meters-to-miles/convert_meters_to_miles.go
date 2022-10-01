package main

import (
	"fmt"
)

func main() {
	var meter int
	fmt.Println("Enter meter(s):")
  fmt.Scan(&meter)
  fmt.Println("Mile(s) for given meter is:", (float32(meter) / 1609))
}
