package main

import "fmt"

func main() {
	var n, r int
	fmt.Printf("Enter the value of n and r separated by space:\t")
	fmt.Scanf("%d %d", &n, &r)
	fmt.Println("Input:\t", n, r)

	
	fmt.Println("Output:\t", calculateFactorial(n)/(calculateFactorial(r)*calculateFactorial(n-r)))
}

func calculateFactorial(n int) int {
	result := 1
	for n > 0 {
		result *= n
		n--
	}

	return result
}
