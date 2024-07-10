import java.util.*

fun factorial(n: Int): Int {
    var result = 1
    for (i in 1..n) {
        result *= i
    }
    return result
}

fun permutation(n: Int, r: Int): Int {
    return factorial(n) / factorial(n - r)
}

fun main() {
    val scanner = Scanner(System.`in`)
    val n = scanner.nextInt()
    val r = scanner.nextInt()
    val result = permutation(n, r)
    println("Permutation of $n objects taken $r at a time is: $result")
}