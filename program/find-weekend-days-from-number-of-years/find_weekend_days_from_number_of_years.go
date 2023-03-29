package main

import "fmt"

func totalWeekendOfYears(num int) int {
	return num * 104
}

func main() {
	var i int
	fmt.Print("Input Number of Years: ")
	fmt.Scan(&i)
	total := totalWeekendOfYears(i)
	fmt.Printf("Total Weekend Days: %d \n", total)
}
