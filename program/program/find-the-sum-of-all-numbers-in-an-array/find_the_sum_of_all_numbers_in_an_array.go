package main
import "fmt"

func main()  {
	array := []int{1,2,3,4,5}
	fmt.Println(SumOfArray(array))
}

func SumOfArray(array []int) int {
	sum := 0
	for i := 0; i < len(array); i++ {
		sum += array[i]
	}
	return sum
}