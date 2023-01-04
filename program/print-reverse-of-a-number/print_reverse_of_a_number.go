package main

import "fmt"

func reverse(s string) string {
	rns := []rune(s)
	for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {

		rns[i], rns[j] = rns[j], rns[i]
	}

	return string(rns)
}

func main() {

	var revnum string

	fmt.Print("Enter the Number to Reverse = ")
	fmt.Scanln(&revnum)

	reverse := reverse(revnum)

	fmt.Println("The Reverse of the Given Number = ", reverse)
}
