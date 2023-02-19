package main

import "fmt"

func main() {
	var str string
	fmt.Scanf("%s", &str)
	for i := 0; i < len(str); i++ {
		fmt.Printf("%d", str[i])
	}
}
