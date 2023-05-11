package main

import "fmt"

func rotateMatrix90(matrix [][]int) [][]int {
    rows, cols := len(matrix), len(matrix[0])

    // Define a new matrix to hold the rotated matrix
    rotated := make([][]int, cols)
    for i := range rotated {
        rotated[i] = make([]int, rows)
    }

    // Cylindrically rotate the matrix by 90 degrees
    for i, row := range matrix {
        for j, val := range row {
            rotated[j][rows-i-1] = val
        }
    }

    return rotated
}

func main() {
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }

    rotated := rotateMatrix90(matrix)

    for _, row := range rotated {
        fmt.Println(row)
    }
}
