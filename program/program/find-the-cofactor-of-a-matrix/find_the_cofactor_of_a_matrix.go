package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Co-factor of a Matrix")
	fmt.Printf("Enter elements of the matrix, separated by space: ")
	var matrix, result [3][3]int
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			fmt.Scanf("%d", &matrix[i][j])
		}
	}

	fmt.Println("Input matrix:")
	prettyPrintMatrix(matrix)

	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			result[i][j] = findDet(i, j, matrix)
		}
	}

	fmt.Println("Co-factor of matrix:")
	prettyPrintMatrix(result)
}

func findDet(row, col int, matrix [3][3]int) int {
	var elements []int
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if !(i == row || j == col) {
				elements = append(elements, matrix[i][j])
			}
		}
	}

	det := int(math.Pow(-1, float64(row+col))) * ((elements[0] * elements[3]) - (elements[1] * elements[2]))

	return det
}

func prettyPrintMatrix(matrix [3][3]int) {
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			fmt.Printf("%v\t", matrix[i][j])
		}
		fmt.Println()
	}
}
