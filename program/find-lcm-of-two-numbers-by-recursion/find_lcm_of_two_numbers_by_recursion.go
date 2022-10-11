package main

import "fmt"

func main() {
	fmt.Println("Enter value of a:")
	fmt.Scan(&a)
	fmt.Println("Enter value of b:")
	fmt.Scan(&b)
	fmt.Println("LCM of 2 values are:", lcm(a, b))
}
func gcd(a int, b int) int {
	if a == 0 {
		return b
	}
	return gcd(b%a, a)
}

func lcm(a int, b int) int {
	return (a / gcd(a, b)) * b
}
