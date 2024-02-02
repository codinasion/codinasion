package main

import (
    "fmt"
    "sort"
)

func main() {
    fmt.Println(smallestThreeElements([]int{10, 4, 3, 50, 23, 90}))
    fmt.Println(smallestThreeElements([]int{12, 13, 1, 10, 34, 1}))
}

func smallestThreeElements(arr []int) []int {
    // sort the input array in ascending order
    sort.Sort(sort.IntSlice(arr))

    // return the first 3 elements
    return arr[:3]
}
