package main
import (
    "fmt"
    "math/big"
)
func main() {
    var num1, num2 big.Int
    fmt.Printf("Input : ")
    fmt.Scanln(&num1, &num2)
    result := new(big.Int).GCD(nil, nil, &num1, &num2)
    fmt.Printf("Output : %d",result)
}