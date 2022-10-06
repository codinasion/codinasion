package main

import (
	"fmt"
)

func main() {
	var feet float64
  fmt.Println("Enter Feet(s):")
  fmt.Scan(&feet)
  fmt.Println("Feet:", (feet / 5280))
}
