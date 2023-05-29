package main

func findSumOfNNaturalNumbersByRecursion(n int) int {
	if n == 0 {
		return 0
	}
	return n + findSumOfNNaturalNumbersByRecursion(n-1)
}

func main() {
	println(findSumOfNNaturalNumbersByRecursion(5))
}
