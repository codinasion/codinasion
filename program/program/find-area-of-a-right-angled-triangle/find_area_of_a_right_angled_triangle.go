package main

import (
	"fmt"
	"strconv"
)

func main() {
  var base float64
  var height float64
  fmt.Println("Enter Base:")
  fmt.Scan(&base)
  fmt.Println("Enter Height:")
  fmt.Scan(&height)
  area := 0.5 * base * height
  fmt.Println("Area:", area)
}
