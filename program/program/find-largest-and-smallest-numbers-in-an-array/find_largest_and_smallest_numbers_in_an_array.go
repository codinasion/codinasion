package main

import "fmt"

func main() {
    var arrsize, i, minPosition, maxPosition int

    fmt.Print("Enter the Array Size to find Smallest & Largest = ")
    fmt.Scan(&arrsize)

    arr := make([]int, arrsize)

    fmt.Print("Enter the Array Items  = ")
    for i = 0; i < arrsize; i++ {
        fmt.Scan(&arrsize[i])
    }
    largest := arr[0]
    smallest := arr[0]

    for i = 0; i < arrsize; i++ {
        if largest < arr[i] {
            largest = arr[i]
            maxPosition = i
        }
        if smallest > arr[i] {
            smallest = arr[i]
            minPosition = i
        }
    }
    fmt.Println("\nThe Largest Number in this Array    = ", largest)
    fmt.Println("The Index Position of Largest Number = ", maxPosition)
    fmt.Println("\nThe Smallest Number in this Array    = ", smallest)
    fmt.Println("The Index Position of Smallest Number = ", minPosition)
}
