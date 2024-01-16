fun main() {
    val twoLargestElements = twoLargestElements(arrayOf(12, 13, 1, 10, 34, 1))
    println(twoLargestElements.joinToString())
}

fun twoLargestElements(array: Array<Int>): Array<Int> {
    return if (array.size < 2) {
        emptyArray()
    } else {
        val sortedArray = array.sortedArrayDescending()
        sortedArray.sliceArray(0..1)
    }
}
