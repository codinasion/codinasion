package main

import (
	"fmt"
	"math"
)

func checkIsPrime(num int) bool {
	square_root := int(math.Sqrt(float64(num)))
	for i:=2; i<square_root; i++ {
		if num % i == 0 {
			return false
		}
	}
	return num > 1
}

func main() {
	var i int
	fmt.Print("Enter Number: ")
	fmt.Scan(&i)
	isPrime := checkIsPrime(i)
	
	if (isPrime) {
		fmt.Println("Prime Number")
	} else {
		fmt.Println("Not Prime Number")
	}
}
