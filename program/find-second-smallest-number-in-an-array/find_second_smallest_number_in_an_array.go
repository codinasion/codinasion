package main

import (
	"fmt"
	"sort"
)

func main() {
	series := []int{1, -2, 4, 11, 16, 7, 18, 9}
	sort.Sort(sort.IntSlice(series))
	fmt.Println(series[1])
}
