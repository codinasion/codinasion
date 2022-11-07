package main
import ("fmt")

func main() {
  var i float64

  fmt.Print("Type a number: ")
  fmt.Scan(&i)
  result := math.Sqrt(i)
  fmt.Println("Your square root is:", result)
}
