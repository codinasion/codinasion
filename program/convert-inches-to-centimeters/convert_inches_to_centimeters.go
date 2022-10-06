package main

import (
	"fmt"
)

func main() {
	var inches float64
	fmt.Println("Enter Inches:")
  fmt.Scan(&inches)
	fmt.Println("Week:", (inches * 2.54))
}
