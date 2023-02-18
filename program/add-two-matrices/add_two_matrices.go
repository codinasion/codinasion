package main

import (
	"fmt"
	"math/rand"
)

func addmatrix(matrix1 [][]int, matrix2 [][]int) [][]int {
	result := make([][]int, len(matrix1))
	for i, a := range matrix1 {
		for j, _ := range a {
			result[i] = append(result[i], matrix1[i][j]+matrix2[i][j])
		}
	}
	return result
}

func makematrix(size int) [][]int {
	m := make([][]int, size)
	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			m[i] = append(m[i], rand.Intn(10)-rand.Intn(9))
		}
	}
	return m
}

func main() {
	var size int
	fmt.Scanf("%d", &size)
	m := makematrix(size)
	n := makematrix(size)
	fmt.Println(m)
	fmt.Println(n)
	fmt.Println("Addition is:", addmatrix(m, n))

}
