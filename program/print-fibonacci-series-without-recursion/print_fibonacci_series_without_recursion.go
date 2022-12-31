package main

import "fmt"

func fibonacci(n int) {
	a := 0
	b := 1
	temp := 0

	fmt.Printf("Input: %d\nOutput: ", n)
	for i := 0; i < n; i++ {
		fmt.Printf("%d ", a)
		temp = b
		b += a
		a = temp
	}

}

func main() {
	var number int
	fmt.Scanln(&number)
	fibonacci(number)
}
