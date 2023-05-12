package main

import (
	"fmt"
	"math/rand"
)

func main() {
	var size int
	fmt.Scanf("%d", &size)
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
	}
	fmt.Println(m)
	ans := 0
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if i == j {
				ans += m[i][j]
			}
		}
	}
	fmt.Println(ans)
}
