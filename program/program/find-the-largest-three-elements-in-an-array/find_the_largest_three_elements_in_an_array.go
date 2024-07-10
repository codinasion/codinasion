package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(largestThreeElements([]int{10, 4, 3, 50, 23, 90}))
    fmt.Println(largestThreeElements([]int{10, 4, 3, 50, 23, 90, 1, 100, 49}))
}

func largestThreeElements(arr []int) []int {
    // sort the input array in descending order
    sort.Sort(sort.Reverse(sort.IntSlice(arr)))

    // return the first 3 elements
    return arr[:3]
}
