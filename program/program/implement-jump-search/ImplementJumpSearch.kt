import kotlin.math.sqrt

fun jumpSearch(arr: IntArray, x: Int): Int? {
    val n = arr.size
    var blockSize = sqrt(n.toDouble()).toInt()
    var prev = 0
    
    while (arr[minOf(blockSize, n) - 1] < x) {
        prev = blockSize
        blockSize += sqrt(n.toDouble()).toInt()
        if (prev >= n) {
            return null
        }
    }
    
    while (arr[prev] < x) {
        prev++
        if (prev == minOf(blockSize, n)) {
            return null
        }
    }
    
    if (arr[prev] == x) {
        return prev
    }
    
    return null
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
            val index = jumpSearch(list, value)
            if (index != null) {
                println("Output: $index")
            } else {
                println("Output: not found")
            }
        } else {
            println("Invalid input for the value.")
        }
    } else {
        println("Invalid input for the array.")
    }
}
