import kotlin.math.max

fun main() {
    val a = intArrayOf(-2, -3, 4, -1, -2, 1, 5, -3)
    println(maxSubArraySum(a))
}


fun maxSubArraySum(a: IntArray): Int {
    val size = a.size
    var best = Int.MIN_VALUE
    var sum = 0
    for (i in 0 until size) {
        sum = max(a[i], sum + a[i])
        best = max(best, sum)
    }
    return best
}
