package main

import "fmt"

func main(){
  var num_of_weeks int
  fmt.Println("Enter nummber of weeks :")
  fmt.Scan(&num_of_weeks)
  fmt.Println("Total minutes in given week is ", num_of_weeks * 10080)
}
