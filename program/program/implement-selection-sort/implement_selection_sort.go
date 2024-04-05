package main

import "fmt"

// Function to perform selection sort
func selectionSort(arr []int) {
    n := len(arr)

    // Traverse through all array elements
    for i := 0; i < n-1; i++ {
        // Find the minimum element in unsorted array
        minIndex := i
        for j := i + 1; j < n; j++ {
            if arr[j] < arr[minIndex] {
                minIndex = j
            }
        }

        // Swap the found minimum element with the first element
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    }
}

func main() {
    // Test the selection sort function
    arr := []int{64, 25, 12, 22, 11}
    fmt.Println("Original array:", arr)
    selectionSort(arr)
    fmt.Println("Sorted array:", arr)
}
