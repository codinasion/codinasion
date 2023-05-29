package main

// Write a GO program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000


import "fmt"

func main(){
  var num_of_weeks int

  fmt.Println("Enter nummber of weeks :")
  fmt.Scan(&num_of_weeks)

	var num_of_seconds int
	num_of_seconds = num_of_weeks * 604800

  fmt.Println("Total Seconds in given week is ", num_of_weeks * 10080)
}

// Contributed by Technical Amanjeet 
