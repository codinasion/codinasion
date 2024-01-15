fun findLargestThreeElements(arr: IntArray) {
    if (arr.size < 3) {
        println("Array size should be at least 3.")
        return
    }

    // Sort the array in descending order
    arr.sortDescending()

    // Print the first three elements
    println("Largest three elements in the array are:")
    for (i in 0 until 3) {
        print("${arr[i]}, ")
    }
}

fun main() {
    val arr1 = intArrayOf(10, 4, 3, 50, 23, 90)
    findLargestThreeElements(arr1)

    val arr2 = intArrayOf(10, 4, 3, 50, 23, 90, 1, 100, 49)
    findLargestThreeElements(arr2)
}
