import java.util.Scanner

fun main() {
    print("Enter String : ")
    println()
    var min = readLine()

    println("Factorial of $min = " + factorialOfNumber(min!!.toInt()))

}

private fun factorialOfNumber(num: Int): Long {
    var factorial: Long = 1
    for (i in 1..num) {
        // factorial = factorial * i;
        factorial *= i.toLong()
    }

    return factorial
}
