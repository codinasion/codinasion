fun selectionSort(arr: IntArray) {
    val n = arr.size

    for (i in 0 until n - 1) {
        // Assume the current element is the minimum
        var minIndex = i

        // Check the rest of the array for a smaller element
        for (j in i + 1 until n) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        // Swap the minimum element with the current element
        if (minIndex != i) {
            val temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
}

fun main() {
    // Example usage
    val arrayToSort = intArrayOf(64, 25, 12, 22, 11)
    
    println("Original Array: ${arrayToSort.joinToString()}")
    
    selectionSort(arrayToSort)
    
    println("Sorted Array: ${arrayToSort.joinToString()}")
}
