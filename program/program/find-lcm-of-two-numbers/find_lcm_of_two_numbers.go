package main

import (
	"fmt"
)

func gcd(a,b int) int{
    if b == 0 {
        return a
    }
    return gcd(b,a%b)
}
func main(){
    var num1, num2 int
    fmt.Print("Input 1st number for LCM : ")
    fmt.Scanln(&num1)
    fmt.Print("Input 2nd number for LCM : ")
    fmt.Scanln(&num2)

    lcm := (num1*num2)/gcd(num1,num2)
    fmt.Print("Output : ",lcm)
}