package main

import (
	"fmt"
)

func main() {
	var minutes float64
  fmt.Println("Enter minute:")
  fmt.Scan(&minutes)
  fmt.Println("Week:",(minutes/10080))
}
