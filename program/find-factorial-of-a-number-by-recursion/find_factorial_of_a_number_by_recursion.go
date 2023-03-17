package main

import "fmt"

func factorialize(num int) int {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1
	} else {
		return num * factorialize(num - 1)
	}
}

func main() {
	var i int
	fmt.Print("Enter Number: ")
	fmt.Scan(&i)
	fmt.Println(factorialize(i))
}
