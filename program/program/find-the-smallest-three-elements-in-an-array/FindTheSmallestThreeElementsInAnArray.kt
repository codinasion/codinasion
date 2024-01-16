fun main() {
    val threeSmallestElements = threeSmallestElements(arrayOf(12, 13, 1, 10, 34, 1))
    println(threeSmallestElements)
}

fun threeSmallestElements(array: Array<Int>): Array<Int> {
    return if (array.size < 3) {
        emptyArray()
    } else {
        val sortedArray = array.sortedArray()
        sortedArray.sliceArray(0..2)
    }
}
