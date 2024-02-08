package main

import (
    "fmt"
)

func binarySearch(sortedArray []int, findThis int) int {
    lowerBound := 0
    upperBound := len(sortedArray) - 1

    for lowerBound <= upperBound {
        mid := lowerBound + (upperBound-lowerBound)/2

        if sortedArray[mid] == findThis {
            return mid
        } else if sortedArray[mid] < findThis {
            lowerBound = mid + 1
        } else {
            upperBound = mid - 1
        }
    }
    return -1
}

func main() {
    sortedArray := []int{1, 2, 3, 4, 5, 6, 7}
    searchForNumber := 4
    foundAtIndex := binarySearch(sortedArray, searchForNumber)

    if foundAtIndex != -1 {
        fmt.Printf("Element %d located at index %d\n", searchForNumber, foundAtIndex)
    } else {
        fmt.Printf("Element %d not found !!!", searchForNumber)
    }
}

/* Cautiously Crafted By Redzwinger */
