package main
import (
	"fmt"
)
func pow (base,exponent int) int{
	result := 1
	for i:= 0; i < exponent ; i++ {
		result *= base
	}
	return result
}
func main(){
	var a,r,n int
	fmt.Printf("Enter the first term (a) : ")
	fmt.Scanln(&a)
	fmt.Printf("Enter the common ratio (r) : ")
	fmt.Scanln(&r)
	fmt.Printf("Enter the number of terms (n) : ")
	fmt.Scanln(&n)
	sum:= a* (1-pow(r,n))/(1-r)
	fmt.Printf("Output : %d", sum)
}
