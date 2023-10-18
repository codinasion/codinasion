package main

import (
    "fmt"
    "log"

    "gonum.org/v1/gonum/blas/blas64"
    "gonum.org/v1/gonum/mat"
    "gonum.org/v1/gonum/lapack/lapack64"
)

func main() {
    // Define the matrix A for which you want to find eigenvectors.
    data := []float64{2, -1, 0, -1, 3, -1, 0, -1, 2}
    rows, cols := 3, 3
    a := mat.NewDense(rows, cols, data)

    // Compute the eigenvalues and eigenvectors.
    eig := mat.Eigen{}
    ok := eig.Factorize(a, false)
    if !ok {
        log.Fatal("Eigenvalue factorization failed.")
    }

    // Get the eigenvalues and eigenvectors.
    eigenvalues := eig.Values(nil)
    eigenvectors := eig.VectorsTo(nil)

    // Print the eigenvalues.
    fmt.Println("Eigenvalues:")
    for i, val := range eigenvalues {
        fmt.Printf("λ%d = %v\n", i+1, val)
    }

    // Print the eigenvectors.
    fmt.Println("\nEigenvectors:")
    for i := 0; i < cols; i++ {
        eigenvector := eigenvectors.ColView(i)
        fmt.Printf("v%d = %v\n", i+1, mat.Formatted(eigenvector.T(), mat.Prefix(""), mat.Squeeze()))
    }
}
