package main

import (
	"fmt"
	"math/rand"
)

func makematrix(size int) [][]int {
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
		fmt.Println(m[i], " ")
	}
	return m
}

func main() {
	var size int
	fmt.Scanf("%d", &size)
	x := makematrix(size)
	var mini int
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if x[i][j] < mini {
				mini = x[i][j]
			}
		}
	}
	fmt.Println(mini)

}
