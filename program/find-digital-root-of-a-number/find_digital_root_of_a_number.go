package main

import "fmt"

func findDigitalRoot(num int) int {
	temp := num
	digit := 0
	droot := 0
	for temp != 0 {
		digit = temp % 10
		droot += digit
		temp /= 10
		if temp == 0 && droot > 9 {
			temp = droot
			droot = 0
		}
	}
	fmt.Println(droot)
	return droot
}
func main() {
	fmt.Println("Enter the number to find its digital root: ")
	var num int
	fmt.Scanln(&num)
	findDigitalRoot(num)
}
