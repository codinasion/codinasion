package main
import "fmt"

func main(){
   fmt.Print("Enter the temperature in Celsius: ")
   var celsius float64
   fmt.Scanf("%f", &celsius)
   fmt.Println("Temperature in Fahrenheit is:", CelsiusToFahrenheit(celsius))
}

func CelsiusToFahrenheit(celsius float64) float64 {
	return celsius*9/5 + 32
}