package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(smallestTwoElements([]int{12, 13, 1, 10, 34, 1}))
    fmt.Println(smallestTwoElements([]int{10, 5, 10}))
    fmt.Println(smallestTwoElements([]int{10, 10, 10}))
}

func smallestTwoElements(arr []int) []int {
    // sort the input array in ascending order
    sort.Sort(sort.IntSlice(arr))

    // return the first 2 elements
    return arr[:2]
}
