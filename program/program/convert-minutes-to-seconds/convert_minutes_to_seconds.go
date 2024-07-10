package main

import "fmt"

func minutesToSeconds(nums int) int {
	return nums * 60
}

func main() {
	var i int
	
	fmt.Print("Input Minutes: ")
	fmt.Scan(&i)
	fmt.Println(minutesToSeconds(i))
}
