package main

import "fmt"

// Write a GO program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

func main(){
 var num int

 fmt.Println("Enter number :")
 fmt.Scan(&num)

 var i int = num
 for i > 0{
	 fmt.Println(i)
	 i--
 }
}

// Contributed by Technical Amanjeet
