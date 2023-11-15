fun main() {
    val a1 = 2 // First term of the GP
    val r = 3  // Common ratio of the GP
    val n = 3  // Number of terms in the series

    val sum = findSumOfGP(a1, r, n)
    println("Sum of the GP series: $sum")
}

fun findSumOfGP(a1: Int, r: Int, n: Int): Int {
    // Formula to find the sum of a GP: S = a * (1 - r^n) / (1 - r)
    val sum = a1 * (1 - Math.pow(r.toDouble(), n.toDouble()).toInt()) / (1 - r)
    return sum
}
