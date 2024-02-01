package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(largestTwoElements([]int{12, 13, 1, 10, 34, 1}))
    fmt.Println(largestTwoElements([]int{10, 5, 10}))
    fmt.Println(largestTwoElements([]int{10, 10, 10}))
}

func largestTwoElements(arr []int) []int {
    // sort the input array in descending order
    sort.Sort(sort.Reverse(sort.IntSlice(arr)))

    // return the first 2 elements
    return arr[:2]
}
