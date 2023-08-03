package main

import "fmt"

func transpose(matrix [][]int) [][]int {
	rows := len(matrix)
	cols := len(matrix[0])

	transposed := make([][]int, cols)
	for i := 0; i < cols; i++ {
		transposed[i] = make([]int, rows)
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			transposed[j][i] = matrix[i][j]
		}
	}

	return transposed
}

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	transposed := transpose(matrix)

	fmt.Println("Original Matrix:")
	printMatrix(matrix)

	fmt.Println("\nTransposed Matrix:")
	printMatrix(transposed)
}

func printMatrix(matrix [][]int) {
	for _, row := range matrix {
		for _, val := range row {
			fmt.Printf("%d\t", val)
		}
		fmt.Println()
	}
}
