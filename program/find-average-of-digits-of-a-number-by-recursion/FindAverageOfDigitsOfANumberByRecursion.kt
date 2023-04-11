import java.util.Scanner

fun averageOfDigits(n: Int, sum: Float = 0.0f, digits: Float = 0.0f) : Float {
    if (n == 0) return sum / digits;

    var s = sum
    var d = digits

    s += n % 10
    d += 1

    return averageOfDigits(n / 10, s, d)
}


fun main() {
    val reader = Scanner(System.`in`)
    val number: Int = reader.nextInt() // taking input from Scanner Class
    reader.close() // Closing the Scanner
    println(averageOfDigits(number))
}