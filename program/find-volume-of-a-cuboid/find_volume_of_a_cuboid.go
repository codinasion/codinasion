package main

import "fmt"

func main(){
 var length int
 var height int
 var width int
  
  fmt.Println("Enter length:")
  fmt.Scan(&length)
  fmt.Println("Enter height:")
  fmt.Scan(&height)
  fmt.Println("Enter width:")
  fmt.Scan(&width)
  fmt.Println("Volume of Cuboid is:", length*width*height)
}
