package main

import "fmt"

func getCofactor(matrix [][]int, temp [][]int, p, q, n int) {
	var i, j int
	for row := 0; row < n; row++ {
		for col := 0; col < n; col++ {
			if row != p && col != q {
				temp[i][j], j = matrix[row][col], j+1
				if j == n-1 {
					j = 0
					i++
				}
			}
		}
	}
}
func determinant(matrix [][]int, n int) int {
	if n == 1 {
	return matrix[0][0]
	}
	var D, sign int = 0, 1
	temp := make([][]int, len(matrix))
	for i := range temp {
		temp[i] = make([]int, len(matrix))
	}
	for f := 0; f < n; f++ {
		getCofactor(matrix, temp, 0, f, n)
		D += sign * matrix[0][f] * determinant(temp, n-1)
		sign = -sign
	}
	return D
}
func adjoint(matrix [][]int) [][]int {
	n := len(matrix)
	adj := make([][]int, n)
	for i := range adj {
		adj[i] = make([]int, n)
	}
	temp := make([][]int, n)
	for i := range temp {
		temp[i] = make([]int, n)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			getCofactor(matrix, temp, i, j, n)
			sign := 1
			if (i+j)%2 != 0 {
				sign = -1
			}
			adj[j][i] = sign * determinant(temp, n-1)
		}
	}
	return adj
}
func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}
	adj := adjoint(matrix)
	fmt.Println("Output :")
	for _, row := range adj {
		fmt.Println(row)
	}
}