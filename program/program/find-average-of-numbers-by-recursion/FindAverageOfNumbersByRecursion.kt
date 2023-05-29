// a is array, i is index and n is size of array
fun avgRec(a: IntArray, i: Int, n: Int): Double {
    // for last element
    if (i == n - 1) return a[i].toDouble()

    // When index is 0, divide sum computed so far by n and compute sum
    return if (i == 0) (a[i] + avgRec(a, i + 1, n)) / n else a[i] + avgRec(a, i + 1, n)
}

fun main() {
    val arr = intArrayOf(1, 2, 3, 4, 5)
    val avgByRecursion = (avgRec(arr, 0, arr.size));
    println("Average By Recursion = $avgByRecursion")
}
