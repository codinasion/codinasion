package main

import "fmt"

func main() {
	var side float32
	fmt.Printf("Side: ")
	fmt.Scan(&side)
	fmt.Println("Perimeter:", 4 * side)
}
