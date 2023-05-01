package main
import "fmt"

func printFloydsTriangle(num int) {
	start := 1

	for i := 1; i <= num; i++ {
		for j := 1; j <= i; j++ {
			fmt.Print(start, " ")
			start++
		}
		fmt.Println()
	}
}

func main(){
	printFloydsTriangle(3)
}