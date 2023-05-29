import java.util.Scanner

fun main() {
    print("Enter number : ")
    println()
    var min = readLine()

    println("Reversed Number: " + ReverseNumber(min!!.toInt()))

}

private fun ReverseNumber(num: Int): Int {
    var reversed = 0
    var num2= num

    while (num2 != 0) {
        val digit = num2 % 10
        reversed = reversed * 10 + digit
        num2 /= 10
    }

    return  reversed
}
