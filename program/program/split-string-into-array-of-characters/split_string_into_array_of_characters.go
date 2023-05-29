package main

import "fmt"

func splitStringIntoArray(str string) {
	var arr []string
	for _, v := range str {
		arr = append(arr, string(v))
	}
	fmt.Printf("%+q", arr)
}

func main() {
	str := "hello world"
	splitStringIntoArray(str)
}
