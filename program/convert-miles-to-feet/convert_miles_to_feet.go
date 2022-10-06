package main

import (
	"fmt"
)

func main() {
	var miles float64
  fmt.Println("Enter Mile(s):")
  fmt.Scan(&miles)
	fmt.Println("Feet:", miles * 5280)
}
