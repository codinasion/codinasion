package main
 
import  "fmt"
 
func miles2kilometers(miles float64) float64 {
   return miles * 1.609344
}

func main() {
   fmt.Println( miles2kilometers(5))
}
