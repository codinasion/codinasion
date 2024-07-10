package main

import (
	"fmt"
	"math"
)

func isArmStrongNumber(num int) bool{
	numStr := fmt.Sprint(num)
	numDigits := len(numStr)
	sum := 0
	originalNum := num

	for num>0 {
		digit:=num%10
		sum+= int(math.Pow(float64(digit),float64(numDigits)))
		num /=10
	}

	return sum == originalNum
}

func main(){
	var num int
	fmt.Print("Input  : ")
	fmt.Scanln(&num)

	if isArmStrongNumber(num){
		fmt.Println("Output : Armstrong Number")
	} else {
		fmt.Println("Output : Not Armstrong Number")
	}
}