package main

import (
	"fmt"
)

func main() {
	var num_of_days int

	fmt.Println("Enter number of Days :")

  fmt.Scan(&num_of_days)
	
  fmt.Println("Total minutes :", num_of_days * 1440)
}
