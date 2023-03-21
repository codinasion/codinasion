package main

import ("fmt")

func minutesToDays(i int) int {
	return (i / 24 / 60)
}

func main() {
	fmt.Println("Input Minutes: ")
	var i int
	fmt.Scanln(&i)
	fmt.Printf("%d minutes = %d days \n", i, minutesToDays(i))
}
