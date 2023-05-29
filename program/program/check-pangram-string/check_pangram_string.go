package main

import "fmt"

func checkIfPangram(s string) bool {
	if len(s) < 26 {
		return false
	}
	var data = make(map[rune]bool)
	for _, i := range s {
		data[i] = true
	}
	return len(data) == 26
}

func main() {
	var s string
	fmt.Scanln(&s)

	isPangram := checkIfPangram(s)

	if isPangram {
		fmt.Printf("%s is a pangram\n", s)
	} else {
		fmt.Printf("%s is not a pangram\n", s)
	}
}
