package main

import "fmt"

func main() {
	var paise float64
	fmt.Scan(&paise)
	rupee := paise / 100
	fmt.Println(rupee)
}
