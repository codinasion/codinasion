import kotlin.math.sqrt

fun ternarySearch(arr: IntArray, value: Int): Int {
    var left = 0
    var right = arr.size - 1

    while (left <= right) {
        val partitionSize = (right - left) / 3
        val mid1 = left + partitionSize
        val mid2 = right - partitionSize

        if (arr[mid1] == value) {
            return mid1
        }

        if (arr[mid2] == value) {
            return mid2
        }

        if (value < arr[mid1]) {
            right = mid1 - 1
        } else if (value > arr[mid2]) {
            left = mid2 + 1
        } else {
            left = mid1 + 1
            right = mid2 - 1
        }
    }

    return -1
}

fun main() {
    // Take input from the user
    println("Enter the sorted array elements separated by spaces:")
    val inputArray = readLine()?.split(" ")?.map { it.toInt() }
    if (inputArray != null) {
        val list = inputArray.toIntArray()

        println("Enter the value to search:")
        val value = readLine()?.toInt()

        if (value != null) {
            val index = ternarySearch(list, value)
            println("Output: $index")
        } else {
            println("Invalid input for the value.")
        }
    } else {
        println("Invalid input for the array.")
    }
}
