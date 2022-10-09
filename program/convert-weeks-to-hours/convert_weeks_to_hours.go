package main

import "fmt"

func main(){
 var num_of_weeks int
	

  fmt.Println("Enter Number of weeks : ")
  fmt.Scan(&num_of_weeks)

	var total_hrs = num_of_weeks * 168
  
  fmt.Println("Total hrs : ", total_hrs)
}
