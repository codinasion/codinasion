package main

import "fmt"

func daysToSeconds(nums int) int {
	return nums * 86400
}

func main() {
	var i int
	fmt.Print("Input Days: ")
	fmt.Scan(&i)
	fmt.Println(daysToSeconds(i))
}
