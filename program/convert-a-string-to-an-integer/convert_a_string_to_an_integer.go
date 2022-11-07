package main

import (
	"fmt"
	"strconv"
)

func StrtoInt(s string) int {
	//converting string to int

	num,err:=strconv.Atoi(s)

	if err!=nil{
		fmt.Println(err)
	}

	//returing number

	return num
}

func main(){
	fmt.Printf("Enter a String number:")
	var s string
	fmt.Scanf("%v",&s)
	//printing the output
	fmt.Println("After converting str to int:",StrtoInt(s))
}
