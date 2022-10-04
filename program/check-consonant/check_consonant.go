package main

import "fmt"

func main() {
	vowels := []string{"a", "e", "i", "o", "u"}
	var char string
	fmt.Scan(&char)
	flag := true
	for _, v := range vowels {
		if v == char {
			flag = false
			break
		}
	}
	if flag {
		fmt.Println("Consonant")
	} else {
		fmt.Println("Vowel")
	}
}