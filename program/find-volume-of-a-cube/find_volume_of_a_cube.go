package main

import (
        "fmt"
        "math"
)

func main() {
        var input float64
        fmt.Print("Enter the side of the cube: ")
        fmt.Scanln(&input)
        result := math.Pow(input, 3.0)
        fmt.Printf("The volume is: %0.0f", result)
}
