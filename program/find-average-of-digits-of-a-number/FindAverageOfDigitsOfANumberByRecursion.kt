import java.util.Scanner

fun averageOfDigits(n: Int, sum: Float = 0f, digits: Float = 0f): Float {
    if (n == 0) return sum / digits
    else return averageOfDigits(n / 10, sum + n % 10, digits + 1)
}

fun main() {
    val reader = Scanner(System.`in`)
    val number: Int = reader.nextInt() // taking input from Scanner Class
    reader.close() // Closing the Scanner
    println(averageOfDigits(number))
}