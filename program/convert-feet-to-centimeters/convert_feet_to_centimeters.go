package main

import "fmt"

func feet_to_centimeters(feet float32) {
	centimeters := feet * 30.48

	fmt.Printf("Input: %f\nOutput: %f", feet, centimeters)

}

func main() {
	var number float32
	fmt.Scanln(&number)
	feet_to_centimeters(number)
}
