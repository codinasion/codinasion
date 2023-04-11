package main

import "fmt"

func main() {
	var num int
	fmt.Scanf("%d", &num)
	var res int
	for num > 0 {
		res += num % 10
		num /= 10
	}
	fmt.Println(res)
}
