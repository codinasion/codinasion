package main

import "fmt"

func secondToWeeks(nums int) int {
	return nums / 604800
}

func main() {
	var i int
	fmt.Print("Enter Seconds: ")
	fmt.Scan(&i);
	fmt.Println(secondToWeeks(i))
}
