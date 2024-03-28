package main

import "fmt"

func celsiusToKelvin(celsius float64) float64 {
    return celsius + 273.15
}

func main() {
    celsius := -40
    kelvin := celsiusToKelvin(celsius)

    fmt.Println("Input (C):", celsius)
    fmt.Println("Output (K):", kelvin)

}
