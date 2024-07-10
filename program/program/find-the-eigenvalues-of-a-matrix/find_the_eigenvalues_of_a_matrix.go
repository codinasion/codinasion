package main

import (
	"fmt"
	"log"

	"gonum.org/v1/gonum/mat"
)

func main() {

	data := []float64{
		1, 2, 3,
		4, 5, 6,
		7, 8, 9,
	}


	A := mat.NewDense(3, 3, data)


	var eig mat.Eigen
	ok := eig.Factorize(A, false)
	if !ok {
		log.Fatal("Eigenvalue computation failed")
	}


	eigenvalues := eig.Values(nil)


	fmt.Println("Eigenvalues:")
	for _, lambda := range eigenvalues {
		fmt.Printf("%.15f\n", real(lambda))
	}
}
