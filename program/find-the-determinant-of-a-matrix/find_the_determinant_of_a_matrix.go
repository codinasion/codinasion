package main

import "fmt"

func main() {
	var i, j int
	var det [3][3]int
	for i = 0; i < 3; i++ {
		for j = 0; j < 3; j++ {
			fmt.Scan(&det[i][j])
		}
	}
	x := (det[1][1] * det[2][2]) - (det[2][1] * det[1][2])
	y := (det[1][0] * det[2][2]) - (det[2][0] * det[1][2])
	z := (det[1][0] * det[2][1]) - (det[2][0] * det[1][1])
	ans := (det[0][0] * x) - (det[0][1] * y) + (det[0][2] * z)
	fmt.Println(ans)
}
