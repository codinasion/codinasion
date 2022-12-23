import java.util.Scanner

fun main() {
    print("Enter digit : ")
    println()
    var min = readLine()

    println("Average of digit: " + sumAndAvgOfDigits(min!!.toString()))

}

private fun sumAndAvgOfDigits(n: String):Double {
    val arrOfInt= n.map {"$it".toInt()}
    println("Sum of digit: ${arrOfInt.sum()}")
    val avg = arrOfInt.average()

    return avg
}