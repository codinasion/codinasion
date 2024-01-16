fun main() {
    val index = linearSearch(arrayOf(1,2,3,4,5,6,7,8,9,10), 9)
    println(index)
}

fun linearSearch(array: Array<Int>, value: Int): Int {
    for (item in array) {
        if (item == value) return array.indexOf(item)
    }
    return -1
}
