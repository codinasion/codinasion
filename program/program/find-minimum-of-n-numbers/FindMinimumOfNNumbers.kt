fun main() {
   val n = arrayOf(10, 20, 30, 40, 50)
   findMiniOfNumber(n)
}

fun findMiniOfNumber(arr: Array<Int>) {
    var min = Int.MAX_VALUE
    for (i in arr) {
        min = min.coerceAtMost(i)
    }
    println(min)
}
