package main

import "fmt"

func main() {

  var hours int
  var minutes int
  fmt.Println("Please enter hours:")
  fmt.Scanf("%d", &hours)
  minutes = hours * 60
  fmt.Println(minutes , " Minutes")
}
