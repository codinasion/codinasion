package main

import (
	"fmt"
	"math"
)

func volumeOfCube(r float64, h float64) float64 {
	return  1.0/3.0 * math.Pi * r * r * h
}

func main() {
	var r, h, volume float64

	fmt.Println("Enter radius : ")
	fmt.Scan(&r)
	fmt.Println("Enter height : ")
	fmt.Scan(&h)

	volume = volumeOfCube(r, h)

	fmt.Println("\nVolume : ", volume)
}
