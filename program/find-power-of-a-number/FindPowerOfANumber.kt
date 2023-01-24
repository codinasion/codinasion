import java.util.Scanner

fun power(base: Int, exp: Int): Int {
    var result = 1
    var i = exp

    while (i > 0) {
        result *= base
        i -= 1
    }

    return result
}

fun main() {
    val inputReader = Scanner(System.`in`)
    val base = inputReader.nextInt()
    val exponent = inputReader.nextInt()

    println(power(base, exponent))
}