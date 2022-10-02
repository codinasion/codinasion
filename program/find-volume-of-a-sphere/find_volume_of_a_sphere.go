package main
 
import (
   "fmt"
   "math"
)
 
func volume (radius float64) float64 {
   return 4.0/3.0 * math.Pi * math.Pow(radius,3)
}
 
func main() {
  var radius float64
  fmt.Println("Enter value of radius:")
  fmt.Scanf(&radius)
  fmt.Println("Volume of Sphere is:",volume(radius))
}
