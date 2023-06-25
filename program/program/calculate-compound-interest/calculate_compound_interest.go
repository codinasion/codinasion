package main

import(
	"fmt"
	"math"
)

func calculateCompoundInterest(principal, rate, time float64) float64{
	interest := principal*math.Pow(1+(rate/100),time)
	return interest
}

func main(){
	var principal,rate,time float64

	fmt.Print("Principal : ")
	fmt.Scanln(&principal)

	fmt.Print("Rate : ")
	fmt.Scanln(&rate)

	fmt.Print("Time : ")
	fmt.Scanln(&time)

	interest := calculateCompoundInterest(principal,rate,time)

	fmt.Printf("Compound interest : %.2f\n",interest)
}